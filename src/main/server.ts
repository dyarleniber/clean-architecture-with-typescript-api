import 'module-alias/register'
import setupDatabase from '@main/config/database'
import setupApp from '@main/config/app'
import env from '@main/config/env'

void (async () => {
  await setupDatabase()
  const app = setupApp()
  app.listen(env.port, () => console.log(`Server running on port ${env.port}`))
})()
