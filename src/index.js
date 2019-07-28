import {betterRequire} from './utils/common'
import {resolve} from 'path'

let apply = (action, ...args) => {
  betterRequire(resolve(__dirname, `./${action}`))(...args)
}
// 主控制流程
// 分配到指定文件

export default apply
