### git
###
1.当我们写项目的时候，我们需要将本地的更改提交仓库时，正确的指令顺序是？
git status ---> git add . ---> git commit -m "提交信息"
###
2.创建分支的命令是？
git branch 分支名
###
3.切换到已存在的分支的命令是？
git checkout 分支名
###
4.创建并切换到新分支的命令是？
git checkout -b 分支名
###
5.删除分支的命令是？
git branch -d 分支名
###
6.强制删除分支的命令是？
git branch -D 分支名
###
7.git commit 的用途？
提交代码更改到本地仓库
执行此命令之前，要执行 git add 暂存文件
提交的信息必须通过 - m 参数指定添加
###
8.git push 的用途？
将本地仓库的代码更改推送到远程仓库
###
9.git status 的用途？
查看当前仓库的修改状态
###
10.git clone 的用途？
克隆远程仓库到本地
###
11.git init 的用途？
在当前项目文件夹目录下初始化一个新的 git 仓库
###
12.查看当前分支的所有提交的历史纪录的命令是？
git log
###
13.要将远程仓库的代码更改合并到本地的当前分支中，请使用命令：
git pull origin main
###
14.从远程仓库获取最新的更改，但不会自动合并到当前分支，请使用命令：
git fetch origin main
###
15.合并远程 / 本地仓库的代码更改到当前分支的命令是？
git merge
###
16.git pull === git fetch + git merge;
###
17.如何在 git 中忽略文件或文件夹？
使用.gitignore 文件，并在此文件中添加需要忽略的文件或文件夹的路径
###
18.删除远程仓库的代码更改的命令是？
git push origin --delete 分支名
###
19.查看工作区与暂存区的差异的指令是？
git diff
###
20.显示特定的提交信息的指令是？
git show
###
21.将单个 / 多个文件添加到暂存区的指令是？
git add 文件名 /git add .
###
22.取消暂存区的文件修改的指令是？
git reset
###
23.可以从仓库恢复文件到工作区 (也叫撤销对当前文件或所有文件修改) 的指令是？
git checkout （-- . / -- 文件名）
###
24.git tag 命令
git tag <name>: 创建轻量标签（仅指向提交），只提交此次记录的哈希值
git tag -a <name> -m "message": 创建带注释的标签 (标签信息包括标签名和注释信息)
git tag -d <name>: 删除本地标签
git push origin <tagname>: 推送指定标签到远程仓库
git tag 指令可以打在任意一次提交上
###
25.处于多人协作开发项目时应该多使用 git merge 而不是 git rebase。
###
26.强制推送本地分支到远程仓库，即使远程有冲突提交的指令是？
git push -f/git push --force
###
27.可以查看简洁的提交历史记录的指令是？（这条指令只占一行）
git log --oneline
###
28.添加远程仓库的指令是？
git remote add origin <url>
###
29.查看远程仓库的指令是？
git remote -v
###
30.克隆远程仓库的指令是？
git clone <url>
###
31.js中的命名规则
函数名：不能以数字开头，不能包含空格，不能使用关键字，驼峰命名法，尽量短，错误例子：function 11111bbbb(){};
同一个变量名不能重复声明,错误例子：const p = 1; const p = 2;// let a = 111; var a = 222;
###
32.promise对象
promise的正确状态转换是pending->fulfilled/rejected
pending -> fulfilled
当异步操作成功完成时，通过调用 resolve(value) 触发状态转换，后续的 .then() 回调会被执行。
pending -> rejected
当异步操作失败时，通过调用 reject(error) 或抛出异常触发状态转换，后续的 .catch() 回调会被执行。
###
33.js中的事件循环（eventLoop）
宏任务（macrotask）：setTimeout、setInterval、IO事件、setImmediate、close事件。
微任务（microtask）：Promise的then回调、process.nextTick、queueMicrotask；
队列的优先级：
一次Eventloop循环会执行一次宏任务和这次循环中的所有的微任务。
1.JavaScript 引擎首先从宏任务中取出第一个任务（编写的顶层script的代码优先执行）
2.执行完毕后，会将微任务中的所有任务取出来，按照顺序进行执行，如果在这个过程中又产生了新的微任务，也需要执行
3.然后再从宏任务队列中取出一个新的宏任务，执行完毕后，再去微任务队列中取出所有的微任务，循环往复，直到两个 队列(queue)中的任务都取完。
注意点：
执行任何一个宏任务之前（不是队列，是一个宏任务），都会先查看微任务队列中是否有任务需要执行。
宏任务执行之前，必须保证微任务队列是空的；如果不为空，优先执行微任务队列中的任务。
在 JavaScript 的事件循环机制中，宏任务（macrotask）和微任务（microtask）并不是“交替”执行的 ，而是存在明确的执行顺序和优先级：
1. 执行顺序
每轮事件循环中，仅执行一个宏任务（如 setTimeout、setInterval、I/O 操作等）。
宏任务执行完毕后，事件循环会清空所有当前可用的微任务（如 Promise.then、MutationObserver 等）。
微任务队列被完全清空后，才会进入下一轮事件循环处理下一个宏任务 。
2. 关键规则
宏任务 → 微任务 → 宏任务 → 微任务......
每个宏任务执行后，会立即处理所有当前微任务（微任务队列清空）。
微任务的优先级高于宏任务，因为它们通常用于处理更紧急的操作（如 Promise 链式调用）。 
###
34.let array = [1, 2, 3, 4, 5];
array.forEach((item, index)=>{
    setTimeout(()=>{
        console.log(item, 0);
    },0);
});
输出：
    1 0
    2 0
    3 0
    4 0
    5 0 
###
35.const obj = {a:1,b:2,c:3};
const proxy = new Proxy(obj, {
    get(target, key) {
        return target[key] + 1;
    }
});
console.log(proxy.a, '++++++++++++'); 
输出：2
###
36.js中常见的操作DOM元素的方法：
getElementById()：通过id获取元素
getElementsByClassName()：通过class获取元素
getElementsByTagName()：通过标签名获取元素
querySelector()：通过选择器获取元素
querySelectorAll()：通过选择器获取元素集合
###
37.js中常见的数据类型：
基本数据类型：
Number：数字类型
String：字符串类型
Boolean：布尔类型
undefined：未定义类型
null：空类型
Symbol：符号类型
引用数据类型：
Object：对象类型
Array：数组类型
###
38.for in循环和for of循环的区别
for...in：
遍历对象的可枚举属性名（键或索引） 。
包括对象自身的和原型链上的可枚举属性。
for...of：
遍历可迭代对象的值 （如数组、Map、Set、字符串等）。
依赖对象的 Symbol.iterator 接口。 
###
39.手写防抖函数
    function debounce(func, delay) {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, arguments);
            }, delay);
        }
    }
###
40.手写节流函数
    function throttle(func, delay) {
        let lastTime = 0;
        return function () {
            const now = new Date().getTime();
            if (now - lastTime >= delay) {
                func.apply(this, arguments);
                lastTime = now;
            }
        }
    } 

###
41.轮播图
    <style>
        .swiper {
            width: 600px;
            height: 300px;
        }

        .swiper-slide {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f1f1f1;
        }

        .swiper-slide img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    </style>

<body>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://picsum.photos/600/300?random=1" alt="图片1"></div>
            <div class="swiper-slide"><img src="https://picsum.photos/600/300?random=2" alt="图片2"></div>
            <div class="swiper-slide"><img src="https://picsum.photos/600/300?random=3" alt="图片3"></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>

    <script>
        var mySwiper = new Swiper('.swiper', {
            direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项
            autoplay: false, // 关闭自动播放
            effect: 'fade', // 切换效果
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // 允许点击分页器切换
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    </script>
</body>

###
42.以下代码输出结果是？
function test() {
    var x = 666;
    if (true) {
        var x = 888;
        console.log(x);
    }
    console.log(x);
}
test();
输出：888 888

###
43.以下代码输出结果是？
setTimeout(()=>{
    console.log("aaaaaaaaaa", 0);
}, 0)
Promise.resolve().then(()=>{
    console.log("bbbbbbbbbb", 0);
});
console.log("cccccccccc", 0);
最后的输出顺序是？
cccccccccc 0
bbbbbbbbbb 0
aaaaaaaaaa 0 

###
44.以下代码输出结果是？
const obj = {qwe: 2};
const obj2 = obj;
obj.qwe = 666;
console.log(obj2.qwe);
输出：666

###
45.以下代码的输出结果是？
let bbb = ["asdasdasd", "adsasdasdqqq", "qewrqwrqr"];
bbb.push("zxczczczcx");
console.log(bbb.length);
输出：4 

###
46.以下代码输出结果是？
let rererer = 0;
for (let i = 1; i <= 10; i++) {
    rererer += i;
}
console.log(rererer);
输出：55

###
47.以下代码输出结果是？
const a = [1,2,3,4,5];
const newA = [...a, 6, ...[7,8,9]];
console.log(newA.length);
输出：9

###
48.以下代码输出结果是？
const bubuu = [1,2,3];
bubuu.push(...[4,5,6]);
console.log(bubuu);
输出：[1,2,3,4,5,6]

###
49.localStorage和sessionStorage和cookie的区别？

localStorage：适合存储长期不变的数据，容量大，永久保存，但不适合敏感信息。
sessionStorage：适合临时会话数据，页面关闭即清除，对于多标签页独立存储。
Cookie：主要用于服务器端需要读取的数据，如身份验证，体积小但会随请求发送，增加网络负担。 

###
50.常用的调用后端接口的方法有哪些？
fetch:
axios:
jQuery.ajax:
XMLHttpRequest: 

###
51.promise和async/await的区别？

本质区别
特性
PROMISE                         ASYNC/AWAIT 

本质
原生的异步处理对象               基于Promise的语法糖 

返回值类型
Promise对象                     函数返回值自动包装为Promise 

错误处理
通过.catch()捕获                通过try/catch捕获 

代码结构
链式调用（.then().catch() ）    同步式写法，避免回调地狱  

###
52.做一个表格
Echarts
四个表格重点！！！！会抽一个表格考（只需要写js即可）