import request from 'request';
import {getAll, get} from '../utils/rc'
import downLoadGit from 'download-get-repo';
import {DOWNLOAD} from '../utils/constants'

let fetch = async (url) => {
  return new Promise((resolve, reject) => {
    let config = {
      url,
      method: 'get',
      headers: {
        'user-agent': 'xxx'
      }
    }
    request(config, (err, response, body) => {
      if (err) {
        reject(err)
      }
      resolve(JSON.parse(body))
    })
  })
}

export const repoList = async () => {
  let config = await getAll();
  let api = `https://api.github.com/${config.type}/${config.registry}/repos`
  return await fetch(api)
}
// 拉取项目的tags
export const tagList = async (repos) => {
  let config = await getAll();
  let api = `https://api.github.com/repos/${config.registry}/${repos}/tags`
  return await fetch(api)
}

export const download = async (src, dist) => {
  return new Promise((resolve, reject) => {
    downLoadGit(src, dist, (err) => {
      if(err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export let downloadLocal = async (project, version) => {
  let conf = await getAll();
  let api = `${conf.registry}/${project}`
  if (version) {
    api += `#${version}`
  }
  return await download(api, DOWNLOAD + '/'+project)
}
