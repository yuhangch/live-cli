import {Command} from '@oclif/command'
import {prompt} from 'inquirer'
import {init, User, Object as LCObject, debug} from 'leancloud-storage'

const applicationId = 'your-app-key'
const applicationKey = 'your-app-key'
const serverURL = 'https://api.server.com'
const username = 'username'
const password = 'password'
// tag list
const tagsEnum: Array<any> = [
  {name: '叽叽喳喳'},
  {name: '瞎想'},
  {name: '其他'},
  {name: '折腾'},
  {name: '读书'},
  {name: '吐槽'},
  {name: '听音乐'},
  {name: '看电视'},
]

init({
  appId: applicationId,
  appKey: applicationKey,
  serverURLs: serverURL,
})

// 如果未设置指定用户访问权限，这行注释掉
User.logIn(username, password)

class Tweet extends LCObject {
  content: string

  tags: Array<string>

  likes: number

  constructor(c: string, t: Array<string>, l: number) {
    super()
    this.content = c
    this.tags = t
    this.likes = l
  }
}

LCObject.register(Tweet)

const tweet = new LCObject('Tweet')

debug.disable()

class LiveCli extends Command {
  static description = '也许能更快的记下自己的心情。'

  async run() {
    const tagSelected: any = await prompt([{
      name: 'tags',
      message: 'tag:',
      type: 'list',
      choices: tagsEnum,
    }])
    let tags = [tagSelected.tags]
    if (tags[0] === '其他') {
      const tagInput: any = await prompt([{
        name: 'newTag',
        message: 'new tag:',
      }])
      tags = [tagInput.newTag]
    }
    const contentText: any = await prompt([{
      name: 'content',
      message: 'content:',
    }])
    const content = contentText.content
    this.log(tags[0], content)
    tweet.set('content', content)
    tweet.set('tags', tags)
    tweet.set('likes', 0)
    tweet.save().then((todo: any) => {
      // eslint-disable-next-line no-console
      console.log(`保存成功。objectId：${todo.id}`)
    }, (error: any) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
  }
}

export = LiveCli
