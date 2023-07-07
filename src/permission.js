import router from '@/router'
import nprogress from '@/lib/nprogress'

router.beforeResolve((to,form,next)=>{
  if(nprogress) nprogress.start()
  next()
})

router.afterEach(()=>{
  nprogress.done()
})