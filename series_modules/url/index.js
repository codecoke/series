var url=new Class();url.property("resolve",function(a){if(a.length===0){return}else{if(a.length===1){return a[0]}else{return a}}});url.define("get",function(a){return this["private"]("resolve")(_.enumerate(Request.QueryString(a)))});url.define("form",function(a){return this["private"]("resolve")(_.enumerate(Request.Form(a)))});url.define("getAll",function(){var a={},b=this;_.each(_.enumerate(Request.QueryString),function(c){a[c]=b.get(c)});return a});url.define("formAll",function(){var a={},b=this;_.each(_.enumerate(Request.Form),function(c){a[c]=b.form(c)});return a});url.define("host",process.env.HTTP_HOST);url.define("agent",process.env.HTTP_USER_AGENT);var ref=String(Request.ServerVariables("HTTP_REFERER"));if(ref&&ref.length>0&&ref!="undefined"){}else{ref=false}url.define("referer",ref);module.exports=url;