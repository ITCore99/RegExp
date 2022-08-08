// let str = "houdunren"
// console.log(str.match(/.+/g))
// let url = "https://www.houdunren.com"
// console.log(url.match(/https?:\/\/www\.\w+\.\w+/))
// const allStr = `
//   <span>
//     houdunren.com  @@@

//     hdcms

//   </span>
// `
// console.log(allStr.match(/<span>[\s\S]+<span>/gm))
// const hd = `
//       #1 js,200元 #
//       #2 php,300元 #
//       #9 houdunren.com # 后盾人
//       #3 node.js,180元 #
// `
// const res = hd.match(/^\s*#\d+\s+.+\s+#$/gm).map(item =>{
//   item = item.replace(/\s+#\d+\s+/, '').replace(/\s+#/, '')
//   const [name, price] = item.split(',')
//   return { name, price }
// })
// console.log(JSON.stringify(res, null, 2))

// 匹配中文字符 在正则表达式中每一个字符都有自己的特征我们称之为属性 如果一个字符的属性是[L] 那么证明他是字母 下面的例子
// let hd = 'houdunren2010.老哥是真的猛呀，加油！'
// console.log(hd.match(/\p{L}/gu)) // 只匹配属性中带L的
// console.log(hd.match(/\p{P}/gu)) // 只匹配属性中带P的 只匹配标点符号
// console.log(hd.match(/\p{sc=Han}+/gu)) // 匹配中文 sc表示语言系统 u是unicode宽字符匹配

/**
 *  lastIndex 属性控制正则表达式匹配的开始和结束
 */ 
// const str = 'houdunren'
// const reg = /\w/g
// console.log(reg.lastIndex)
// console.log(reg.exec(str));
// console.log(reg.lastIndex)
// console.log(reg.exec(str));
// console.log(reg.lastIndex)
// while(res = reg.exec(str)){
//   console.log(res)
// }

/**
 *  较少使用的y模式 
 *  与 g 模式进行比较 g模式会进行全局的匹配对于不符合正则表达式的会跳过继续匹配后面的
 *  y 模式则是遇到与正则表达式不匹配的就会停止不再匹配 
 *  主要的作用是对一大篇幅的匹配 使用y的效率会更高点
 */ 
// let hd = '后盾人QQ群:11111111,9999999,88888888后盾人不断分享视频教程，后盾人网址是 houdunren.com'
// let reg = /(\d+),?/y
// let qq = []

// reg.lastIndex = 7
// console.log(reg.exec(hd))
// console.log(reg.exec(hd))
// console.log(reg.exec(hd))
// console.log(reg.exec(hd))
// while(reg.lastIndex < hd.length){
//   const res = reg.exec(hd)
//   res && qq.push(res[1])
//   reg.lastIndex =  reg.lastIndex + 1
//   console.log(reg.lastIndex)
// }
// console.log('qq', qq)

/**
 * 原子表 就是方括号 只能使用其中的一个字符
 */
// let date = '2022-10-23'
// let reg = /^(\d{4})[-/](\d{2})[-/](\d{2})/
// console.log(date.match(reg))

/**
 * 排除匹配 [^] 
 * 在原子表中使用括号就是普通的括号 而不是原子组的意思 类似的还有 . 和 +
 * . 是除了换行之后的任意字符
 */
// let hd = 'houdunren.com'
// console.log(hd.match(/[^ue]/g))
// let hd2 = '张三: 18810759782,李四: 17630384057' // 只获取中文
// console.log(hd2.match(/[^\d\w,:\s]+/g)) // 使用原表
// console.log(hd2.match(/\p{sc=Han}+/gu)) // 使用字符属性的 语言系统

// const body  = document.querySelector('body')
// const reg = /<(h[1-6])>[\s\S]*<\/\1>/gi
// body.innerHTML = body.innerHTML.replace(reg, '')

/**
 * 使用正则进行匹配邮箱
 */
// const email1 = '2833507@qq.com'
// const email2 = 'fuzhuoning@sina.com.cn'
// const reg = /^[\w-]+@([\w-]+\.)+(com|cn|org|cc|net)$/ig
// 测试
// console.log(reg.test(email1))
// console.log(reg.test(email2)) // 📢 这个是false 目前不知道 为什么校验不通过
// console.log(email1.match(reg))
// console.log(email2.match(reg))

// 将下面字符串的h标签替换为p标签
// let str = `
//   <h1>houdunren</h1>
//   <h2>后盾人</h2>
//   <h3>hd.com</h3>
// `
// const res = str.replace(/<(h[1-6])>([\s\S]+)<\/\1>/g, function(p0, p1, p2) {
//   return `<p>${p2}</p>`
// })
// console.log('res', res)

/**
 * 嵌套分组与不记录分组 
 * 不记录分组我们使用 " ?: " 这种写法 也就是在分组中使用这样的
 */
// 提取出 下面字符串中的域名并放到urls中
// const domains = []
// let str = `
//   https://www.houdunren.com
//   http://houdunren.com
//   https://hdcms.com
// `
// let reg = /https?:\/\/((?:\w+\.)?\w+\.(?:com|cn|org))/g // 忽略掉最后一个 不进行记录
// // console.log(reg.exec(str))
// // console.log(reg.exec(str))
// // console.log(reg.exec(str))
// while(res = reg.exec(str)) {
//   domains.push(res[1])
// }

// console.log('domains', domains)

/**
 * 贪婪模式 * + {1, 100} ?(也是贪婪的贪到1) 等都是贪婪的去匹配尽可能多的去匹配
 */
// let hd = 'hdddddd'
// console.log(hd.match(/hd+/)) // 贪婪
// console.log(hd.match(/hd*/)) // 贪婪

/**
 * 禁止贪婪
 */

// let hd = 'hddddd'
// console.log(hd.match(/hd+?/))
// console.log(hd.match(/hd*?/))
// console.log(hd.match(/hd{2,100}?/))

/**
 * 练习
 * 将下方字符串中 
 * http://www.hdcms.com 中的http 变为https
 * http://houunren.com 添加上www
 * 保持http://yahoo.com 不变
 */
// let str = `
//   <a style="color:red" href="http://www.hdcms.com">
//   开源系统
//   </a>
//   <a id="l1" href='http://houdnren.com'>后盾人</a>
//   <a href="http://yahoo.com">雅虎</a>
//   <p>测试</p>
// `
// const reg = /(<a.*?href=['"])(http)(:\/\/)(www\.)?(hdcms|houdnren)/gi
// // console.log(str.match(reg))
// const res = str.replace(reg, function(...arg) {
//   arg[2] = arg[2] + 's' // 加上s
//   arg[4] = arg[4] ? arg[4] : 'www.' // 没有www.的加上www.
//   return arg.slice(1,6).join('')
// })
// console.log('res=>', res)

/**
 * 组起别名 写法在括号里面?<名字> (?<con>)
 */
// let hd = `
//   <h1>houdunren</h1>
//   <span>后盾人</span>
//   <h2>hdms</h2>
// `
// let reg = /<(h[1-6])>(?<con>.*?)<\/\1>/gi
// console.log(hd.match(reg))
// console.log(hd.replace(reg, '<h4>$<con></h4>'))

// 获取下方字符串 链接和文字 形式 {link: http:www.fuzhuoning.com, title: '付卓宁'}
// let str = `
//   <a style="color:red" href="http://fuzhunining.com">付卓宁</a>
//   <a id="l1" href='http://houdnren.com'>后盾人</a>
//   <a href="http://yahoo.com">雅虎</a>
// `
// const reg2 = /<a.*?href=(["'])(?<link>.*?)\1>(?<title>.*?)<\/a>/gi
// console.log(str.matchAll(reg2))
// const links = []
// for (let iterator of str.matchAll(reg2)) {
//   links.push(iterator.groups)
// }
// console.log('links=>', links)
/**
 * 正则表达式中的断言(后面是什么的) 写法?=
 * 可以理解为正则表达式中的条件语句
 */
// 为下面字符串中教程之前的后盾人
// const str = '后盾人不断分享视屏教程，学习后盾人教程调高变成能力'
// const reg = /后盾人(?=教程)/g
// console.log(str.replace(reg,'<a href="https:www.houdunren.com">$&</a>'))
// let hd = `
//   js,200元,300次
//   php,300.00元,100次
//   node.js,180元,260次
// `
// let reg2 = /(\d+)(\.00)?(?=元)/g
// console.log(hd.replace(reg2, function(...arg) {
//   arg[2] = arg[2] || '.00'
//   return arg.slice(1,3).join('')
// }))
/**
 * 正则表达式中的断言(前面是什么的) 写法(?<=)
 * 可以理解为正则表达式中的条件语句
 */
// 获取前面是huodunren的数字
// let hd = 'huodunren789hdcms666'
// const reg = /(?<=huodunren)\d+/
// console.log(hd.match(reg))
// 获取字符串中的网址 我们使用断言实现一遍
// let str = `
//   <a href="https://www.yahoo.com">雅虎</a>
//   <a href="https://www.baidu.com">百度</a>
// `
// const reg2 = /(?<=href=(["'])).+(?=\1)/ig // 需要注意的是前面 (?<=href=(["'])) 整体是断言 里面的括号是原子组
// console.dir(str.match(reg2))
// 使用断言来进行对电话号码后四位进行变化*处理
// let hd = `
//   fuzhuoning: 17630384057
//   wife: 12345678901
// `
// const reg = /(?<=\d{7})\d{4}/ig
// console.log(hd.replace(reg, function(...arg) {
//   console.log(arg)
//   return '*'.repeat(4)
// }))
/**
 * 后面不是什么的断言 ?! 之前我们学习的后面是什么的是?=
 */
// 通过断言来取hdms
// let hd = 'huodunren2022hdms'
// const reg = /[a-z]+(?!\d)$/ig // 翻译就是取字母后面不是数字的
// console.log(hd.match(reg))
// const reg2 = /^(?!.*向军.*)[a-z]+$/ig // 限制字符串中不能出现向军两个 翻译就是从最开始到后面的所有的内容不能包含向军
// console.log(reg2.test('aa向军'))
// console.log(reg2.test('aa向军bbb'))
// console.log(reg2.test('aabbb'))
/**
 * 前面不是什么的断言 (?<!)
 */
// let str = 'hdcms99houdunren'
// let reg = /(?<!\d+)[a-z]+/ig // 前面不是数组的字母
// console.log(str.match(reg))
// const hd = '<a href="http://www.houdunren.com/1.jpg">1.jpg</a><a href="http://houdunren.com/1.jpg">2.jpg</a>'
// const reg2 = /http:\/\/(?<!oss)\w+\..+?(?=\/)/ig
// console.log(hd.replace(reg2,(...arg)=> {
//   return 'https://oss.houdunren.com'
// }))
// 获取url链接query参数
const url = 'http://www.baidu.com/index.html?a=1&b=2&c=3'
function getUrlQueryParams(url) {
  const reg = /[?&]?(?<key>\w+)=(?<value>\w+)/gi
  const params = []
  while(res = reg.exec(url)) {
    params.push(res.groups)
  }
  return params
}
const params = getUrlQueryParams(url)
console.log('params', params)