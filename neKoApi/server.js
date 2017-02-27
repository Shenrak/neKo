const Koa = require('koa');
const app = new Koa();

const routes = require('./app/routes');

app.use(allowCrossDomain);

for (let route of routes)
  app.use(route.routes());

async function allowCrossDomain (ctx, next){
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Content-Type', 'text/html; charset=utf-8');
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type,Authorization,Origin');
    await next;
}

app.listen(8085, function(){
  console.log("Server listening on port 8085");
});
