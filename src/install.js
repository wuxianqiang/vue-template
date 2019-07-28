// 通过配置文件，获取信息
// 让用户手动选择模板
import {repoList, tagList, downloadLocal} from './utils/get'
import ora from 'ora'
import inquirer from 'inquirer'

let install = async () => {
  let loading = ora('fetching template....');
  loading.start()
  let list = await repoList();
  loading.succeed()
  list = list.map(({name}) => name)
  // console.log(list)
  let answer = inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      choices: list,
      questions: 'pleace choice template'
    }
  ])
  // 项目名称
  let project = answer.project
  // console.log(answer.project)
  loading = ora('fetching tag....');
  loading.start()
  list = await tagList(project)
  loading.succeed();
  answer = inquirer.prompt([
    {
      type: 'list',
      name: 'tag',
      choices: list,
      questions: 'pleace choice tag'
    }
  ])
  // 版本号
  let tag = answer.tag;
  // 下载文件\
  loading = ora('download template....');
  loading.start()
  await downloadLocal(project, tag)
  loading.succeed()
  // my-cli init

  // vue会使用模板引擎

  // vue init 把当前的下载的模板 生成到目录中
}

export default install
