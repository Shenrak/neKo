const router = require('koa-router')({
  prefix:'/users'
});

router.get('/', await function (){
  ctx.response.status = 200;
  await next;
}); // Define routes

module.exports = router;
