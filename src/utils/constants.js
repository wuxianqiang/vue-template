import {version} from '../../package.json';

export const VERSION = version;

// 找到用户的跟目录
const HOME = process.env[process.platform === 'win32'? 'USERPROFILE': 'HOME']

export const RC = `${HOME}/.zfclirc`

// RC 配置模板下载的地方

export const DEFAULTS = {
  registry: 'qq-template', // 配置模板的名称
  type: 'orgs' // 配置是组织还是个人
}

export const DOWNLOAD = `${HOME}/.template`
