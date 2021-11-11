#!/usr/bin/env node

const childProcess = require('child_process')

let serverCmd
const port = process.env.PORT

if (process.env.SERVER_CMD !== '') {
  serverCmd = process.env.SERVER_CMD
} else {
  switch (process.env.STRATEGY) {
    case 'start-storybook':
      serverCmd = `start-storybook -p ${port}`
      break
    case 'http-server':
      const path = process.env.DIST_PATH
      serverCmd = `npx http-server ${path} -p ${port}`
      break
    case 'none':
      serverCmd = null
      break
    default:
      throw new Error('Unsupported strategy')
  }
}

const args = []
if (typeof serverCmd === 'string') {
  args.push('--serverCmd')
  args.push(`"${serverCmd}"`)
}

const scheme = process.env.HTTPS === 'true' ? 'https' : 'http'
const url = `${scheme}://${process.env.HOST}:${port}`
args.push(url)

const options = {}
if (process.env.WORKING_DIR !== '') {
  options.cwd = process.env.WORKING_DIR
}

const { stdout, stderr, status } = childProcess.spawnSync('storycap', args, options)
console.log(stdout.toString())
console.error(stderr.toString())
if (status) {
  process.exit(status)
}
