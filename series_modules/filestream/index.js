var contentTypes=require("./content-types.json"),unknowType="application/octet-stream";exports.textStream=["text/xml","text/html","text/css","application/x-javascript"];exports.set=function(a,b){contentTypes[a]=b};exports.get=function(a){return contentTypes[a]};exports.save=function(){fs.writeFile(module.resolve("./content-types.json"),JSON.stringify(contentTypes))};exports.send=function(e){var f=path.extname(e).toLowerCase();var b=e.split("\\").slice(-1)[0];var a=unknowType;if(contentTypes[f]){a=contentTypes[f]}if(this.textStream.indexOf(a)>-1){Response.ContentType=a;Response.Write(fs.readFile(e))}else{var d=new ActiveXObject("Adodb.Stream"),c=0,g=1024;d.Mode=3;d.Type=1;d.Open();d.LoadFromFile(e);Response.AddHeader("Content-Disposition","attachment; filename="+b);Response.AddHeader("Content-Length",d.Size);Response.ContentType=a;while(c<d.Size){Response.BinaryWrite(d.Read(g));Response.Flush();c=c+g}d.Close()}};exports.download=function(a,c){var b=require("ajax"),e=new b();var d=e.getBinary(a);fs.writeFile(c,d)};