/* eslint-disable max-len */
// prettier-ignore
import moment from 'moment';
import { Article } from '@leaa/common/src/entrys';
import { CreateArticleInput } from '@leaa/common/src/dtos/article';
import { CreateCategoryInput } from '@leaa/common/src/dtos/category';
import { CreateAxInput } from '@leaa/common/src/dtos/ax';
import { CreateSettingInput } from '@leaa/common/src/dtos/setting';
import { CreateCouponInput } from '@leaa/common/src/dtos/coupon';
import { CreatePromoInput } from '@leaa/common/src/dtos/promo';
import { IPermissionSlug } from '@leaa/common/src/interfaces';

// TIPS relation file: packages/leaa-api/src/configs/permission.config.ts
export const permissionsSeed: { name: string; slug: IPermissionSlug }[] = [
  { name: 'Playground', slug: 'playground.root' },
  { name: 'Test', slug: 'test.root' },
  { name: 'Lab', slug: 'lab.root' },
  //
  // --------------------------------
  //
  { name: 'User List Read', slug: 'user.list-read' },
  { name: 'User List Read (All User Id)', slug: 'user.list-read--all-user-id' },
  //
  { name: 'User Item Read', slug: 'user.item-read' },
  { name: 'User Item Read (All User Id)', slug: 'user.item-read--all-user-id' },
  { name: 'User Item Create', slug: 'user.item-create' },
  { name: 'User Item Update', slug: 'user.item-update' },
  { name: 'User Item Delete', slug: 'user.item-delete' },
  //
  // --------------------------------
  //
  { name: 'Role List Read', slug: 'role.list-read' },
  { name: 'Role List Read (All User Id)', slug: 'role.list-read--all-user-id' },
  //
  { name: 'Role Item Read', slug: 'role.item-read' },
  { name: 'Role Item Read (All User Id)', slug: 'role.item-read--all-user-id' },
  { name: 'Role Item Create', slug: 'role.item-create' },
  { name: 'Role Item Update', slug: 'role.item-update' },
  { name: 'Role Item Delete', slug: 'role.item-delete' },
  //
  // --------------------------------
  //
  { name: 'Permission List Read', slug: 'permission.list-read' },
  { name: 'Permission List Read (All User Id)', slug: 'permission.list-read--all-user-id' },
  //
  { name: 'Permission Item Read', slug: 'permission.item-read' },
  { name: 'Permission Item Read (All User Id)', slug: 'permission.item-read--all-user-id' },
  { name: 'Permission Item Create', slug: 'permission.item-create' },
  { name: 'Permission Item Update', slug: 'permission.item-update' },
  { name: 'Permission Item Delete', slug: 'permission.item-delete' },
  //
  // --------------------------------
  //
  { name: 'Category List Read', slug: 'category.list-read' },
  //
  { name: 'Category Item Read', slug: 'category.item-read' },
  { name: 'Category Item Create', slug: 'category.item-create' },
  { name: 'Category Item Update', slug: 'category.item-update' },
  { name: 'Category Item Delete', slug: 'category.item-delete' },
  //
  // --------------------------------
  //
  { name: 'Article List Read', slug: 'article.list-read' },
  { name: 'Article List Read (All User Id)', slug: 'article.list-read--all-user-id' },
  { name: 'Article List Read (All Status)', slug: 'article.list-read--all-status' },
  //
  { name: 'Article Item Read', slug: 'article.item-read' },
  { name: 'Article Item Read (All User Id)', slug: 'article.item-read--all-user-id' },
  { name: 'Article Item Read (All Status)', slug: 'article.item-read--all-status' },
  { name: 'Article Item Create', slug: 'article.item-create' },
  { name: 'Article Item Update', slug: 'article.item-update' },
  { name: 'Article Item Delete', slug: 'article.item-delete' },
  //
  // --------------------------------
  //
  { name: 'Ad List Read', slug: 'ax.list-read' },
  { name: 'Ad List Read (All Status)', slug: 'ax.list-read--all-status' },
  //
  { name: 'Ad Item Read', slug: 'ax.item-read' },
  { name: 'Ad Item Read (All Status)', slug: 'ax.item-read--all-status' },
  { name: 'Ad Item Create', slug: 'ax.item-create' },
  { name: 'Ad Item Update', slug: 'ax.item-update' },
  { name: 'Ad Item Delete', slug: 'ax.item-delete' },
  //
  // --------------------------------
  //
  { name: 'Tag List Read', slug: 'tag.list-read' },
  //
  { name: 'Tag Item Read', slug: 'tag.item-read' },
  { name: 'Tag Item Create', slug: 'tag.item-create' },
  { name: 'Tag Item Update', slug: 'tag.item-update' },
  { name: 'Tag Item Delete', slug: 'tag.item-delete' },
  //
  // --------------------------------
  //
  { name: 'Attachment List Read', slug: 'attachment.list-read' },
  { name: 'Attachment List Read (All Status)', slug: 'attachment.list-read--all-status' },
  //
  { name: 'Attachment Item Read', slug: 'attachment.item-read' },
  { name: 'Attachment Item Read (All Status)', slug: 'attachment.item-read--all-status' },
  { name: 'Attachment Item Create', slug: 'attachment.item-create' },
  { name: 'Attachment Item Update', slug: 'attachment.item-update' },
  { name: 'Attachment Item Delete', slug: 'attachment.item-delete' },
  //
  // --------------------------------
  //
  { name: 'Setting List Read', slug: 'setting.list-read' },
  { name: 'Setting List Read (All Status)', slug: 'setting.list-read--all-status' },
  //
  { name: 'Setting Item Read', slug: 'setting.item-read' },
  { name: 'Setting Item Read (All Status)', slug: 'setting.item-read--all-status' },
  { name: 'Setting Item Create', slug: 'setting.item-create' },
  { name: 'Setting Item Update', slug: 'setting.item-update' },
  { name: 'Setting Item Delete', slug: 'setting.item-delete' },
  //
  // --------------------------------
  //
  { name: 'Coupon List Read', slug: 'coupon.list-read' },
  { name: 'Coupon List Read (All User Id)', slug: 'coupon.list-read--all-user-id' },
  { name: 'Coupon List Read (All Status)', slug: 'coupon.list-read--all-status' },
  //
  { name: 'Coupon Item Read', slug: 'coupon.item-read' },
  { name: 'Coupon Item Read (All User Id)', slug: 'coupon.item-read--all-user-id' },
  { name: 'Coupon Item Read (All Status)', slug: 'coupon.item-read--all-status' },
  { name: 'Coupon Item Create', slug: 'coupon.item-create' },
  { name: 'Coupon Item Update', slug: 'coupon.item-update' },
  { name: 'Coupon Item Delete', slug: 'coupon.item-delete' },
  //
  { name: 'Coupon Item Redeem', slug: 'coupon.item-redeem' },
  { name: 'Coupon Item Redeem (To Any User)', slug: 'coupon.item-redeem--to-all-user-id' },
  //
  // --------------------------------
  //
  { name: 'Promo List Read', slug: 'promo.list-read' },
  { name: 'Promo List Read (All Status)', slug: 'promo.list-read--all-status' },
  //
  { name: 'Promo Item Read', slug: 'promo.item-read' },
  { name: 'Promo Item Read (All Status)', slug: 'promo.item-read--all-status' },
  { name: 'Promo Item Create', slug: 'promo.item-create' },
  { name: 'Promo Item Update', slug: 'promo.item-update' },
  { name: 'Promo Item Delete', slug: 'promo.item-delete' },
  //
  { name: 'Promo Item Redeem', slug: 'promo.item-redeem' },
  { name: 'Promo Item Redeem (To Any User)', slug: 'promo.item-redeem--to-all-user-id' },
];

// prettier-ignore
export const rolesSeed = [
  { name: 'Admin', slug: 'admin' },
  { name: 'Staff', slug: 'staff' },
  { name: 'Attachment Manager', slug: 'attachment-manager' },
];

// prettier-ignore
export const usersSeed = [
  { email: 'admin@leaa.com', name: 'Admin', password: 'h8Hx9qvPKoHMLQgj', status: 1 },
  { email: 'staff@leaa.com', name: 'Staff', password: '7PkQGjvHMMkoo4RZ', status: 1 },
  { email: 'disabled@leaa.com', name: 'Disabled', password: 'uUB3YGrdL3gJZYij', status: 1 },
  { email: 'empty-en@leaa.com', name: 'Empty User', password: 'uUB3YGrdL3gJZYi1', status: 1 },
  { email: 'empty-cn@leaa.com', name: '空号用户', password: 'uUB3YGrdL3gJZYi2', status: 1 },
  { email: 'empty-jp@leaa.com', name: '空のユーザー', password: 'uUB3YGrdL3gJZYi3', status: 1 },
];

const randomSersSeedData = [];

for (let i = 0; i < 50; i += 1) {
  const name = `RANDOM_USER_${i.toString().padStart(4, '0')}`;

  randomSersSeedData.push({
    email: `${name}@RRRR.com`,
    name,
    password: Math.random()
      .toString(36)
      .slice(-8),
    status: 1,
  });
}

export const randomSersSeed = randomSersSeedData;

// prettier-ignore
export const roleAddPermissionsSeed = [
  { roleSlug: 'admin', permissionSlugs: permissionsSeed.map(p => p.slug) }, // allpermissions
  { roleSlug: 'staff', permissionSlugs: permissionsSeed.filter(p => p.slug.includes('user.')).map(p => p.slug) },
  { roleSlug: 'attachment-manager', permissionSlugs: permissionsSeed.filter(p => p.slug.includes('attachment.')).map(p => p.slug) },
];

// prettier-ignore
export const userAddRolesSeed = [
  { userEmail: 'admin@leaa.com', roleSlugs: ['admin', 'staff', 'attachment-manager'] },
  { userEmail: 'staff@leaa.com', roleSlugs: ['staff', 'attachment-manager'] },
];

// prettier-ignore
export const categorySeed: CreateCategoryInput[] = [
  { parent_id: 0, name: 'Article', description: '文章分类', slug: 'article' },
  { parent_id: 0, name: 'Help', description: '帮助中心', slug: 'help' },
];

// prettier-ignore
export const articleSeed: CreateArticleInput[] = [
  {
    title: '哈喽，Leaa',
    slug: 'hello-leaa',
    status: 1,
    categoryIds: [1],
    description: 'Hello, World 是指在计算机屏幕显示 “Hello, World!”（你好，世界！）',
    content: '<p>Hello, World 是指在计算机屏幕显示 “Hello, World!”（你好，世界！）字符串的计算机程序。相关的程序通常都是每种计算机<a href="https://zh.wikipedia.org/wiki/%E7%B7%A8%E7%A8%8B%E8%AA%9E%E8%A8%80" class="mw-redirect">编程语言</a>最基本、最简单的程序，也会用作示范一个编程语言如何运作。同时它亦可以用来确认一个编程语言的<a href="https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%AD%AF%E5%99%A8">编译器</a>、程序开发环境及<a href="https://zh.wikipedia.org/wiki/%E9%81%8B%E8%A1%8C%E7%92%B0%E5%A2%83" class="mw-redirect">运行环境</a>是否已经安装妥当。因为写法简单可见，这也是很多初学者首次接触编程语言时会撰写的程序。</p><p></p><p></p><div class="media-wrap image-wrap"><img class="media-wrap image-wrap" alt="hello world" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Hello_World_Brian_Kernighan_1978.jpg"/></div><p></p><p></p><p></p><h2 id="a95ou">历史</h2><p style="text-align:start;text-indent:2em;">于1972年，<a href="https://zh.wikipedia.org/wiki/%E8%B2%9D%E7%88%BE%E5%AF%A6%E9%A9%97%E5%AE%A4" class="mw-redirect">贝尔实验室</a>成员<a href="https://zh.wikipedia.org/wiki/%E5%B8%83%E8%90%8A%E6%81%A9%C2%B7%E6%9F%AF%E6%9E%97%E6%BC%A2">布莱恩·柯林汉</a>撰写的内部技术文件《A Tutorial Introduction to the Language B》首次提到了 Hello World 这字符串。当时，他使用<a href="https://zh.wikipedia.org/wiki/B%E8%AA%9E%E8%A8%80">B语言</a>撰写了第一个使用参数的Hello World相关程序：</p><p></p><pre data-lang="javascript" class="lang-javascript"><code class="lang-javascript">main(){<br/>  extrn a,b,c;<br/>  putchar(a); putchar(b); putchar(c); putchar(&#x27;!*n&#x27;);<br/>  }<br/><br/>a &#x27;hell&#x27;;<br/>b &#x27;o, w&#x27;;<br/>c &#x27;orld&#x27;;</code></pre><p><br/>由 <a href="https://zh.wikipedia.org/wiki/%E5%B8%83%E8%90%8A%E6%81%A9%C2%B7%E6%9F%AF%E6%9E%97%E6%BC%A2">布莱恩·柯林汉</a> 撰写的“Hello, world”程序 (1978年)</p><p style="text-align:start;text-indent:2em;">这个程序成为了第一个Hello World的示范程序。之所以会这样切割，是因为于B语言中，每个参数只能放置四个<a href="https://zh.wikipedia.org/wiki/ASCII">ASCII</a>字符<sup><a href="https://zh.wikipedia.org/wiki/Hello_World#cite_note-langb-5">[5]</a></sup>。两年后，布莱恩·柯林汉和<a href="https://zh.wikipedia.org/wiki/%E4%B8%B9%E5%B0%BC%E6%96%AF%C2%B7%E9%87%8C%E5%A5%87">丹尼斯·里奇</a>基于B语言写成<a href="https://zh.wikipedia.org/wiki/C%E8%AA%9E%E8%A8%80" class="mw-redirect">C语言</a>后，在他们撰写的《<a href="https://zh.wikipedia.org/wiki/C%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%AD%E8%A8%80_(%E4%B9%A6)">C程序设计语言</a>》使用更简单的方式展示Hello World:</p><p></p><pre data-lang="javascript" class="lang-javascript"><code class="lang-javascript">#include &lt;stdio.h&gt;  main( ) {         printf(&quot;hello, world\\n&quot;); } </code></pre><p></p><p style="text-align:start;text-indent:2em;">自此，Hello World 成为了计算机程序员学习新的编程语言的传统。但是，有些人认为 <em>hello, world</em> 的字符串早于1966 年的 BCPL语言出现的时候已经出现。虽然相关的字词确实在发明者记录的文件出现，但是可以肯定的是，Hello World 这字符串于当时确实未变得流行。因此，人们公认为<a href="https://zh.wikipedia.org/wiki/%E5%B8%83%E8%90%8A%E6%81%A9%C2%B7%E6%9F%AF%E6%9E%97%E6%BC%A2">布莱恩·柯林汉</a>是令相关字符串走进公众目光的人。</p><p style="text-align:start;text-indent:2em;">但是需要注意的是，Hello World 的初始写法为 “hello, world”，并没有任何感叹号，全部都是小写，内含逗号，后面亦有空格，而和现在流行的写法并不一致。</p><p></p><p></p><p></p><h2 id="6go16">派生影响</h2><p></p><h3 id="1jh40"><strong>对计算机文化的影响</strong></h3><p style="text-align:start;text-indent:2em;"><a href="https://zh.wikipedia.org/wiki/Debian">Debian</a> 以及系统的<a href="https://zh.wikipedia.org/wiki/%E9%80%B2%E9%9A%8E%E5%8C%85%E8%A3%9D%E5%B7%A5%E5%85%B7" class="mw-redirect">高级包装工具</a>当中包含了 “hello, world” 安装工具。用户只需要于终端（Linux 系统的Terminal）输入“apt-get install hello”便能够安装此工具及其相关部件。虽然看似没用，但却可作为测试工具使用。同时，这亦能够向新用户展示安装工具的方法。对开发者来说，这个工具展现了创建<a href="https://zh.wikipedia.org/wiki/.deb" class="mw-redirect">.deb</a>安装工具的方法。这个工具，连同 GNU Hello 便成为了撰写 GNU 程序的教学软件。</p><p></p><p></p><h3 id="ejihs"><strong>对其他电子产品的影响</strong></h3><p style="text-align:start;text-indent:2em;">虽然 Hello World 在<a href="https://zh.wikipedia.org/wiki/%E5%96%AE%E6%99%B6%E7%89%87" class="mw-redirect">单片机</a>微计算机、<a href="https://zh.wikipedia.org/wiki/%E7%8E%B0%E5%9C%BA%E5%8F%AF%E7%BC%96%E7%A8%8B%E9%80%BB%E8%BE%91%E9%97%A8%E9%98%B5%E5%88%97">现场可编程逻辑门阵列</a>及<a href="https://zh.wikipedia.org/wiki/%E8%A4%87%E9%9B%9C%E5%8F%AF%E7%A8%8B%E5%BC%8F%E9%82%8F%E8%BC%AF%E8%A3%9D%E7%BD%AE" class="mw-redirect">复杂可编程逻辑器件</a>中不能展现出来，一盏细小的微型 LED 灯会代替 Hello World 的作用，以表示安装成功、相关程序功能已实现。</p><p><br/></p><h3 id="clkc1"><strong>对流行文化的影响</strong></h3><p style="text-align:start;text-indent:2em;">Hello World 已经成为流行文化的一部分，例如以 Hello World 命名首个运用纯人工智能完成的专辑。同时，亦有若干公司以 Hello World 命名，例如位于澳州的 Helloworld 旅游公司、Hello World Consulting 等。</p><p></p><p></p>',
  },
  {
    title: 'Sample Article',
    slug: 'demo-article',
    status: 1,
    categoryIds: [2],
    description: 'Sample Article Description',
    content: '<p>JUST A SAMPLE ARTICLE</p><br /><br /><br /><br /><br />',
  },
  {
    title: '<script>alert(\'hello, leaa.\')</script>',
    slug: 'alert-test',
    status: 1 ,
    description: '<script>alert(\'hello, leaa.\')</script>',
    categoryIds: [1],
    content: '<p>&lt;script&gt;alert(&#x27;hello, leaa.&#x27;)&lt;/script&gt;</p>',
  },
  {
    title: 'The State of Web Browsers 2019 edition',
    slug: 'the-state-of-web-browsers-2019-edition',
    status: 1,
    categoryIds: [2],
    description: 'Two days ago, I published a bitter sweet article on the state of web browsers.',
    content: '<p>Two days ago, I published a bitter sweet article on the state of web browsers, triggered by the news that Microsoft would abandon their EdgeHTML engine, replacing it with Chromium. Which was the final nail in the coffin, effectively establishing Chromium as the web’s engine, combined with Safari’s webkit. The only resistance to this monopoly, Mozilla, finds itself without any significant allies or traction to counter this development.</p><p>The article got some readership and a fair amount of feedback. The general consensus seems to be that the article is truthful but depressing.</p><p>Critical notes suggest that some statements are true-ish but too broad, lacking finer details and nuance. I agree. Some statements could be more polished, but it would make the article twice as long, and not all of those details matter for the larger conclusions I was going for. To illustrate, the article got tens of thousands of views, only 25% bothered to actually read it. Which surely has to do with length, and I suppose some were so disgusted halfway-in, they gave up, saving both time and the chance of a clinical depression.</p><p></p><p>Only a few critiqued the delivery style of brutal honesty, most seemed to appreciate it. And some don’t, it comes with the territory. All I can say is that I won’t tone it down, I was actually in a mild mood that day. I don’t apply brutal honesty for shock value or attention, I genuinely believe that in a world ruled by tech, we need no nonsense critique, not sugar coated suggestions. Plus, I’m dutch, this is our default tone of voice.</p><p>Back on point, why a second article? I want to address the depressing part of the original article. If you were brave enough to read it to the end, you’d notice the lack of a happy ending. You could be under the impression that the web is a lost cause, the open web in great danger, and that we’ve returned to medieval IE times. It would take the greatest of optimists to wade through that article without it ruining your day, if you care about the web.</p><p></p><p>I cannot change the fact that the road to Chromium/Webkit dominance was messy or even abusive. It is a questionable history that will not be undone. We’re going to leave this one to the lawyers, but sure enough, those browsers aren’t going to be uninstalled. It’s a done deal.</p><p>In this article, we’re going to accept the new state, where Chromium dominates the web, and look ahead. To see what Chromium dominance means for users, developers and the open web. The spoiler is of course that there’s plenty of reasons to be happy, optimistic, and even excited about this new state, even if the new state came into existence in unfair ways.</p><p></p><p><a href="https://ferdychristant.com/the-state-of-web-browsers-88224d55b4e6" target="_blank">[Link]</a></p>'
  },
  {
    title: 'web 浏览器现状 2019版',
    slug: 'the-state-of-web-browsers-2019-edition-cn',
    status: 1,
    description: '两天前，有感于微软放弃 Edgehtml 引擎，使用 Chromiun 取而代之的事件',
    categoryIds: [1],
    content: '<p>两天前，😊 有感于微软放弃 Edgehtml 引擎，使用 Chromiun 取而代之的事件，我发表了一篇关于浏览器兴衰的文章。微软的此番作为被视为将 Chromium 与 Safari 的 webkit 结合建立搜索引擎的最后一步。而此时，唯一能对微软的垄断行为产生威胁的对手 —— Mozilla，发现自己已经没有盟友和动力来应对微软的这一举措了。</p><p></p><p>这篇文章获得了大量读者的反馈，大家普遍肯定了文章的真实性，但也对文章揭露的事实感到沮丧。</p><p></p><p>一些批判性的评论则认为文章的一些观点是真实可信的，但过于宽泛，缺乏细节。我肯定有些观点可以更加精辟，但这会使文章的篇幅增加一倍，并且增加的内容对我所要阐述的核心观点没有太大用处。比如说，该篇文章获得了数万读者的浏览，实际上仅仅有 25% 左右的读者真正通读了，可能是因为文章的长度，有些读者感到厌烦，在阅读中途就放弃了，既节省了时间又免得内心沮丧。</p><p></p><p>只有少数人批评我近似残酷的诚实，更多读者则偏向欣赏我的做法。这等同于领土问题。我所能说的是，尽管那天我的情绪很平和，但我并不会降低语气。我也不会用我的诚实获取价值和关注，我坚信在一个由科技主导的世界里不需要毫无意义的批评，更不需要高谈阔论的建议。另外，我是一个荷兰人，我们惯有的语调就是如此。</p><p></p><p>回到主题上，为什么要发布第二篇文章？我想要谈谈原文中令人沮丧的那部分内容。如果你有足够的时间读到最后，你会在末尾发现这将是一个缺少快乐的结局。你可能会认为 web 是一个失败的东西，开放的 web 处于极大的危险中，我们已经回到了中世纪的 IE 时代。如果你关心 web 的话，即使是最乐观的人也会在不破坏自己一天的情况下读完这篇文章。</p><p></p><p>我不能改变的事实是： Chromium/Webkit 的统治之路是混乱的，甚至是滥用的。这是一段不可抹去的、值得怀疑的历史。我们将把这个留给律师，但足够肯定的是，这些浏览器仍不会被卸载。咱们走着瞧。</p><p></p><p>在本文中，我们将接受 Chrome 主导 web 的新态势，并展望未来。看看 Chromium 的优势对用户、开发者和开放 web 意味着什么。剧透一下，我们将有很多理由对这个态势感到高兴、乐观，甚至兴奋，即使这个新态势是以一种不公平的方式出现的。</p><p></p><p><a href="https://github.com/xitu/gold-miner/blob/master/TODO1/the-state-of-web-browsers-2019-edition.md" target="_blank">[全文链接]</a></p>',
  },
  {
    title: 'The 4 types of ‘Why’: What is the driving force behind your product?',
    slug: 'the-4-types-of-why-what-is-the-driving-force-behind-your-product',
    status: 1,
    categoryIds: [1],
    description: '',
    content: '<p style="text-align:start;" size="3" _root="[object Object]" __ownerID="undefined" __hash="undefined" __altered="false">I recently wrote about a framework I created called <a href="https://medium.com/@kit_ulrich/a-surprisingly-simple-technique-for-a-rockstar-product-vision-the-ladder-of-needs-ae624d81ca6b" target="_blank" class="bb cn ld le lf lg">the Ladder of Needs</a>, a simple tool for product people to create a compelling vision. It combines the best of Simon Sinek’s ideas from <a href="https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447" target="_blank" class="bb cn ld le lf lg">Start with Why</a> and Clay Christensen’s classic <a href="https://hbr.org/2016/09/know-your-customers-jobs-to-be-done" target="_blank" class="bb cn ld le lf lg">framework of ‘jobs to be done’</a>.</p><p><br/></p><div class="media-wrap image-wrap"><img alt="" width="680px" height="549.484px" src="https://miro.medium.com/max/1584/1*4RcIun2jW3x010o9MrYIVw.png" class="mt mu fm n o fl x fj" /></div><p></p><p style="text-align:start;text-indent:2em;" id="9834" class="kp kq fo bs kr b ks kt ku kv kw kx ky kz la lb lc" data-selectable-paragraph=""></p><p></p><p>So, how do you determine the ‘Why’ behind your product?</p><p></p><blockquote>“People often ask what will be different in the world in 10 years, the more important question is what will be the same” — Jeff Bezos</blockquote><p style="text-align:start;text-indent:2em;" id="295a" class="kp kq fo bs kr b ks kt ku kv kw kx ky kz la lb lc" data-selectable-paragraph=""></p><p>Start by considering this gem from Jeff Bezos:</p><p></p><p>So true, because the fundamentals of what people want and need are exactly that…fundamental truths. In my time as a product leader, I have found 4 models that apply to almost all consumer experiences and products. These are not mutually exclusive — they are ideas that overlap in many ways, but one will likely call to you more than the others.</p><p><br/></p><div class="media-wrap image-wrap"><img width="680px" height="81.1406px" src="https://miro.medium.com/max/1542/0*1mrb_-l-2fb9vd5i" class="mt mu fm n o fl x fj" alt="" /></div><p>What is your customer’s scarcest resource? It tends to be either money, time, energy.</p><p></p><p>You may have seen this meme on Twitter or Instagram before (I’d love to know whom to credit with it’s creation). It’s a great framework for products.</p><p><br/></p><div class="media-wrap image-wrap"><img width="680px" height="338.625px" src="https://miro.medium.com/max/1486/0*3CW4a_5cLbHd2Jc3" class="mt mu fm n o fl x fj" alt="" /></div><p>This is why Bezos’ answer to his own question, ‘what will be the same in the world in 10 years’, was that Amazon customers would always want lower prices (money) and faster shipping (time). Amazon’s strategy was built by focusing on these core customer needs.This is also why Uber isn’t in the business of selling rides, it is in the business of selling time.</p><p></p><p><a href="https://medium.com/@kit_ulrich/the-4-types-of-why-what-is-the-driving-force-behind-your-product-1b06fb4ef7bc" target="_blank">[Full Link]</a></p>',
  },
  { title: 'EMPTY-DEMO-00', slug: 'empty-demo-00', status: 1, categoryIds: [2], description: 'EMPTY-DEMO-00', content: '<p>EMPTY-CONTENT-00</p>' },
  { title: 'EMPTY-DEMO-01', slug: 'empty-demo-01', status: 1, categoryIds: [2], description: 'EMPTY-DEMO-01', content: '<p>EMPTY-CONTENT-01</p>' },
  { title: 'EMPTY-DEMO-02', slug: 'empty-demo-02', status: 1, categoryIds: [2], description: 'EMPTY-DEMO-02', content: '<p>EMPTY-CONTENT-02</p>' },
  { title: 'EMPTY-DEMO-03', slug: 'empty-demo-03', status: 1, categoryIds: [2], description: 'EMPTY-DEMO-03', content: '<p>EMPTY-CONTENT-03</p>' },
  { title: 'EMPTY-DEMO-04', slug: 'empty-demo-04', status: 1, categoryIds: [2], description: 'EMPTY-DEMO-04', content: '<p>EMPTY-CONTENT-04</p>' },
  { title: 'EMPTY-DEMO-05', slug: 'empty-demo-05', status: 1, categoryIds: [2], description: 'EMPTY-DEMO-05', content: '<p>EMPTY-CONTENT-05</p>' },
  { title: 'EMPTY-DEMO-06', slug: 'empty-demo-06', status: 1, categoryIds: [2], description: 'EMPTY-DEMO-06', content: '<p>EMPTY-CONTENT-06</p>' },
  { title: 'EMPTY-DEMO-07', slug: 'empty-demo-07', status: 1, categoryIds: [2], description: 'EMPTY-DEMO-07', content: '<p>EMPTY-CONTENT-07</p>' },
  { title: 'EMPTY-DEMO-08', slug: 'empty-demo-08', status: 1, categoryIds: [2], description: 'EMPTY-DEMO-08', content: '<p>EMPTY-CONTENT-08</p>' },
  { title: 'EMPTY-DEMO-09', slug: 'empty-demo-09', status: 1, categoryIds: [2], description: 'EMPTY-DEMO-09', content: '<p>EMPTY-CONTENT-09</p>' },
  {
    title: '四个「为什么」：是什么在背后驱动你的产品？',
    slug: 'the-4-types-of-why-what-is-the-driving-force-behind-your-product-cn',
    status: 1,
    categoryIds: [1],
    description: '',
    content: '<p>我刚刚在写我创作的一个叫做<a href="https://link.juejin.im?target=https%3A%2F%2Fmedium.com%2F%40kit_ulrich%2Fa-surprisingly-simple-technique-for-a-rockstar-product-vision-the-ladder-of-needs-ae624d81ca6b" target="_blank" rel="nofollow noopener noreferrer">需求的阶梯</a>的框架，它是一个可以让产品人员创造美好愿景的简单工具。「需求的阶梯」结合了 Simon Sinek 在 <a href="https://link.juejin.im?target=https%3A%2F%2Fwww.amazon.com%2FStart-Why-Leaders-Inspire-Everyone%2Fdp%2F1591846447" target="_blank" rel="nofollow noopener noreferrer">《Start with Why》</a>中最棒的想法和 Clay Christensen 的经典著作<a href="https://link.juejin.im?target=https%3A%2F%2Fhbr.org%2F2016%2F09%2Fknow-your-customers-jobs-to-be-done" target="_blank" rel="nofollow noopener noreferrer">《framework of ‘jobs to be done’》</a>。<br/> </p><p><br/> <strong>所以，你如何决定你产品背后的「为什么」？</strong><br/> Jeff Bezos（译者注：杰夫·贝佐斯，亚马逊创始人）是最开始思索这个问题的人：<br/>「人们经常问，10年后世界上会有什么不同，但我认为更重要的是，10年后还有什么不变」— Jeff Bezos<br/> <br/> 是的，因为人们想要且需要的真理恰恰是基本的事实。在我作为产品团队负责人期间，我找到了几乎可以应用到所有消费体验和产品的四个模型。他们并不互斥 —— 在很多方向他们是互相覆盖的，但其中一个可能比其他的更值得你关注。<br/> </p><p></p><p><br/> 什么是你的客户缺乏的资源？一般来说有三个方面 —— 钱、时间、精力。<br/> 你可能之前在 Twitter 或 Instagram 上看过这张图片（我很想知道它的作者是谁），这是一个伟大的产品框架。<br/> <br/></p><p><br/> 这就是 Bezos 提出的「10 年后世界上还有什么不变」这个问题的答案 —— 亚马逊的客户总是想要更低的价格（金钱）和更快的运输（时间），亚马逊的战略就是通过专注于这些核心客户需求而建立的。<br/> 这也是为什么 Uber 的商业模式不是「卖车」，而是「卖时间」。<br/></p><p><a href="https://github.com/xitu/gold-miner/blob/master/TODO1/the-4-types-of-why-what-is-the-driving-force-behind-your-product.md" target="_blank">[链接]</a></p>',
  },
  {
    title: 'Sources Say China Used iPhone Hacks to Target Uyghur Muslims',
    slug: 'sources-say-china-used-iphone-hacks-to-target-uyghur-muslims',
    status: 1,
    categoryIds: [1],
    description: 'A number of malicious websites used to hack into iPhones over a two-year period were targeting.',
    content: '<p> <em>Note: This was originally posted at       <a href="https://martinheinz.dev/blog/3">martinheinz.dev</a></em> <br/>      Nowadays, everybody is trying to run everything in container and I don&#x27;t blame them, I do the     same thing, because running applications,<br/>     databases or other tools in Docker container is super nice and we all know why (isolation, easy     setup, security...).<br/>     However, sometimes debugging, accessing, or in general interacting with containers can be pretty     annoying. This includes accessing, modifying or querying databases. So, as I used PostgreSQL     extensively and have been running it inside containers for a while now, I - over time - made a     list of few commands that can help immensely when doing simple and also not so simple operation     with a database server.   <br/> <a href="#" class="anchor"> </a>     Log Into PSQL   <br/>      The most basic thing you will always need to do if you want to interact with your database     server is to connect to the database itself (using <em>PSQL</em>):<br/> <br/>  docker exec -it &lt;container_name&gt; psql -U&lt;user_name&gt; -a &lt;db_name&gt; <br/> <br/>      So for Docker container called <code>db</code>, default user <code>postgres</code> and database     name <code>blog</code> it would be<br/> <br/>  docker exec -it db psql -Upostgres -a blog <br/> <br/> <a href="#" class="anchor"> </a>     Running Command Against Database   <br/>      It&#x27;s nice that you can log in and then execute whatever commands you need, but it&#x27;s often more     convenient to do it in one go, especially if you want to run just a single command or query:<br/> <br/>  docker exec -it &lt;container_name&gt; psql -U&lt;user_name&gt; -a &lt;db_name&gt; -c &#x27;&lt;command/query&gt;&#x27; <br/> <br/>      So if we wanted to list all tables in database using same parameters as in previous example:<br/> <br/>  docker exec -it db psql -Upostgres -a blog -c &#x27;\\l&#x27; <br/> <br/>      Here, <code>\\l</code> lists all tables in current database, if you are not familiar with     <em>psql</em> &quot;backslash&quot; commands, then I highly recommend this     <a href="https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546">cheatsheet</a>.   <br/> Apart from <code>psql</code> commands you can run any SQL query like so:<br/><br/>  docker exec -it db psql -Upostgres -a blog -c &#x27;SELECT * FROM posts;&#x27; <br/> <br/> <a href="#" class="anchor"> </a>     Backing up Your Data   <br/>      From time to time I need to backup data or whole schema of the database, sometimes just as an     <em>&quot;insurance policy&quot;</em> and sometimes so I can make changes recklessly and restore     everything afterwards, so here how to do it:<br/> <br/>  docker exec -it &lt;container_name&gt; pg_dump -U&lt;user_name&gt; --column-inserts --data-only &lt;db_name&gt; &gt; backup.sql <br/> <br/>      In this example, we are making use of <code>pg_dump</code> utility, which allows us to extract     PostgreSQL databases. I&#x27;m using <code>--column-inserts</code> and <code>--data-only</code> flags     to get only table rows, but quite often all that is needed is schema, for that you can use     <code>-s</code> flag.   <br/> <a href="#" class="anchor"> </a>     Execute whole SQL files   <br/>      Sometimes you need to populate existing database with enough data for testing (please don&#x27;t do     this with production databases) or it&#x27;s just easier to use data from file then to copy and paste     them into command above.<br/> <br/>  docker cp ./data.sql &lt;container_name&gt;:/data.sql docker exec -it &lt;container_name&gt; psql -U&lt;user_name&gt; -a &lt;db_name&gt; -f /data.sql <br/> <br/>      Here we first need to copy the file itself into the running container and then execute it using     the <code>-f</code> flag.   <br/> <a href="#" class="anchor"> </a>     Prepopulating Database on the Start   <br/>      Previous example was good enough if you need to execute it from time to time, but it can become     annoying if you have to do it every time you start the database.<br/>     So, in case you decide that it&#x27;s better to just populate the database on the start, then here is     solution for that. It just requires little more work:   <br/> We will need following files:<br/> </p><ul><li><code>Dockerfile</code> - <em>Dockerfile</em> for your Postgres image</li><li><code>create_db.sh</code> - Script that creates database, schema and populates it.</li><li><code>schema.sql</code> - SQL file containing your database schema</li><li><code>data.sql</code> - SQL file containing data used to populate your database</li><li><code>.env</code> - File with environment variables, to make your life easier</li></ul><p> First, the <code>Dockerfile</code>:<br/><br/>  FROM postgres:11 # Custom initialization scripts COPY ./create_db.sh /docker-entrypoint-initdb.d/20-create_db.sh COPY schema.sql /schema.sql COPY data.sql /data.sql RUN chmod +x /docker-entrypoint-initdb.d/20-create_db.sh <br/> <br/>      This is very simple <em>Dockerfile</em>, all we need to do here is to copy our script and     schema/data into the image so they can be on run start-up. You may be asking,     <em>There is no <code>ENTRYPOINT</code> or <code>COMMAND</code>, how do we run it on       start-up?</em>     - the answer is, that base <code>postgres</code> image runs on start any scripts present in     <code>docker-entrypoint-initdb.d</code> directory, so all we need to do is copy our script to     this directory and PostgreSQL takes care of it.   <br/> But what is in the script (<code>create_db.sh</code>)?<br/><br/>  create database schema using file we copied into the image and finally it populates the database     with data. All the variables here are coming from the <code>.env</code> file mentioned before,     which makes it very easy to change your database name or username at any time without modifying     script itself.   <br/>      For more complete example please see my repository     <a href="https://github.com/MartinHeinz/blog-backend/tree/master/postgres">here</a> <br/> <a href="#" class="anchor"> </a>     What About <code>docker-compose</code>?   <br/>      In my experience, most of the time I end up running database in conjunction with the application     that is using it and the simplest way to do it is <em>docker-compose</em>. Usually I prefer to     refer to the <em>docker-compose</em> service by service name, rather then container name which     might or might not be the same thing. In case it isn&#x27;t<br/>     same, you can just following command:<br/> <br/>  docker exec -it $(docker-compose ps -q &lt;db_service_name&gt;) psql -U&lt;user_name&gt; -a &lt;db_name&gt; <br/> <br/>      Only real difference here from the previous examples is the <code>docker-compose</code> part,     which looks up information of the specified service. The <code>-q</code> flag make it so, that     only container IDs are displayed, which is all we need.   <br/> <a href="#" class="anchor"> </a>     Conclusion   <br/>      I hope at least some of these little hacks will make your life easier when dealing with Docker     and PostgreSQL or maybe if you were avoiding Docker just because it might be little annoying     when working with databases, then I hope you will give it a shot after reading this article. 🙂   <br/> </p>',
  },
  {
    title: 'Create Serverless API With Zeit Now',
    slug: 'create-serverless-api-with-zeit-now',
    status: 1,
    categoryIds: [1],
    description: '',
    content: '<p> For my side project, tracking of favourite TV shows, I created a simple API, that response with the list of data from RSS feed. To make it enjoyable and learn something new on away, I did a serverless infrastructure and wrote some thoughts on what I found out.<br/> If the concept of a serverless application is new to you, in a nutshell, it is a serverless Lambdas (functions) per entry point, stored in a third-party cloud infrastructure provider and executed on-demand — each function stored as a separate package. When you request to a specific endpoint, Lambda function boots up, executes the code and sends back a response.<br/> <a href="#" class="anchor"> </a>   Pros and Cons <br/> Consider the advantages and disadvantages of choosing serverless architecture over running a server yourself:<br/> </p><ul><li> Pros<br/> </li><ul><li>Maintainance - service provider is taking care of the server updates, patches, hardware</li><li>Cost - you pay for what you use; for a number of invocations or computational value</li><li>Security - each function is stored as a separate package per entry-point</li><li>Scaling - scales automatically</li></ul></ul><p> </p><ul><li> Cons<br/> </li><ul><li>Dependance from 3rd party vendor</li><li>Latency - functions need time to boot up</li><li>Not suitable for long-time running because of price</li><li>Hard to test and debug - challenging to replicate a serverless environment</li></ul></ul><p> </p><p> <a href="#" class="anchor"> </a>   Choosing provider <br/> As serverless architectures become more popular, more vendors offer their services. To mention popular ones: Amazon AWS Lambda, Google Cloud Function, Cloudflare Workers, Azure Functions.<br/> I looked into AWS and Google services and got lost in the documentation and sign up processes. It looked like too much of a set up for a quick test project.<br/> I&#x27;ve picked Zeit Now Serverless Functions for quick and easy setup, no need for configuration or optimization management.<br/> It supports React, Node.js, Go and many more. You write and push the code with Now, everything else managed automatically, and you receive an entry point to execute your function. Also, it has a free tier, that will probably cover your small project requirements.<br/> <a href="#" class="anchor"> </a>   Bootstrap project <br/> Zeit Now CLI offers quick templates to bootstrap your projects. If you still don&#x27;t have Now installed, you can do that by running following command in a terminal:<br/> <br/> npm i now -g <br/> To list templates, run:<br/> <br/> now init <br/> From the list, select the language or framework that you fancy.<br/> For my project, I use <code>vanilla-functions</code> template.<br/> <a href="#" class="anchor"> </a>   Create a Function For an Entry Point <br/> For <code>Now</code> to create an entry point and function to be valid, it must be placed under <code>/api</code> directory in the <code>root</code> of a project and exported as a default.<br/> A simple example of a function that sends back a greeting message as a response would be so:<br/> <br/> // api/greet.js module.exports = (req, res) =&gt; { res.send(&#x27;Welcome!&#x27;); } <br/> If you create a Node.js application, you will have access to some helpers, that is very similar to <code>express.js</code>:<br/> </p><ul><li>request.query</li><li>request.cookies</li><li>request.body</li><li>response.status()</li><li>response.json()</li><li>response.send()</li></ul><p> <a href="#" class="anchor"> </a>   Deployment <br/> Deployment with <code>Now</code> is a breeze. Just run a command in a terminal from your project <code>root</code> directory:<br/> <br/> now <br/> And see how everything is done for you. After a successful build you will get a deployed application address, similar to this:<br/> <code>https://vanilla-functions-bcb58vyrs.now.sh</code><br/> To send a request for a greeting message, add <code>/api/greet</code> suffix to the deployed address:<br/> <code>https://vanilla-functions-bcb58vyrs.now.sh/api/greet</code><br/> That&#x27;s it. We created a stupid simple API with a meaningful message.<br/> <a href="#" class="anchor"> </a>   Conclusion <br/> Serverless infrastructure can be easy to set up, and provider like Zeit Now makes this process friendly for developers. The majority of work is automated and can be done in just a few steps.<br/> Now it&#x27;s up to you, what&#x27;s going to happen inside the serverless functions.<br/> If you got interested, see more information about <a href="https://zeit.co/docs/v2/serverless-functions/introduction/">Now Serverless Functions</a>.<br/> </p>',
  },
  { title: 'EMPTY-DEMO-10', slug: 'empty-demo-10', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-10', content: '<p>EMPTY-CONTENT-10</p>' },
  { title: 'EMPTY-DEMO-11', slug: 'empty-demo-11', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-11', content: '<p>EMPTY-CONTENT-11</p>' },
  { title: 'EMPTY-DEMO-12', slug: 'empty-demo-12', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-12', content: '<p>EMPTY-CONTENT-12</p>' },
  { title: 'EMPTY-DEMO-13', slug: 'empty-demo-13', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-13', content: '<p>EMPTY-CONTENT-13</p>' },
  { title: 'EMPTY-DEMO-14', slug: 'empty-demo-14', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-14', content: '<p>EMPTY-CONTENT-14</p>' },
  { title: 'EMPTY-DEMO-15', slug: 'empty-demo-15', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-15', content: '<p>EMPTY-CONTENT-15</p>' },
  { title: 'EMPTY-DEMO-16', slug: 'empty-demo-16', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-16', content: '<p>EMPTY-CONTENT-16</p>' },
  { title: 'EMPTY-DEMO-17', slug: 'empty-demo-17', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-17', content: '<p>EMPTY-CONTENT-17</p>' },
  { title: 'EMPTY-DEMO-18', slug: 'empty-demo-18', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-18', content: '<p>EMPTY-CONTENT-18</p>' },
  { title: 'EMPTY-DEMO-19', slug: 'empty-demo-19', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-19', content: '<p>EMPTY-CONTENT-19</p>' },
  {
    title: 'What you missed in cybersecurity this week',
    slug: 'what-you-missed-in-cybersecurity-this-week',
    status: 1,
    categoryIds: [1],
    description: '',
    content: '<div class="article-content"><p id="speakable-summary">There’s not a week that goes by where cybersecurity doesn’t dominates the headlines. This week was no different. Struggling to keep up? We’ve collected some of the biggest cybersecurity stories from the week to keep you in the know and up to speed.</p><h3 id="maliciouswebsiteswereusedtosecretlyhackintoiphonesforyearssaysgoogle"><a href="https://techcrunch.com/2019/08/29/google-iphone-secretly-hacked/" style="color: rgb(70, 165, 102);">Malicious websites were used to secretly hack into iPhones for years, says Google</a></h3><p><strong>TechCrunch:</strong> This was the biggest iPhone security story of the year. Google researchers found a number of websites that were stealthily hacking into thousands of iPhones every week. The operation was carried out by China to target Uyghur Muslims, <a href="https://techcrunch.com/2019/08/31/china-google-iphone-uyghur/">according to sources</a>, and also <a href="https://www.forbes.com/sites/thomasbrewster/2019/09/01/iphone-hackers-caught-by-google-also-targeted-android-and-microsoft-windows-say-sources/">targeted Android and Windows users</a>. Google said it was an “indiscriminate” attack through the use of previously undisclosed so-called “zero-day” vulnerabilities.</p><div class="embed breakout"><blockquote class="wp-embedded-content" data-secret="Kf8dsEfZXr" style="display: none;"><p><a href="https://techcrunch.com/2019/08/29/google-iphone-secretly-hacked/">Malicious websites were used to secretly hack into iPhones for years, says Google</a></p></blockquote><p><iframe title="“Malicious websites were used to secretly hack into iPhones for years, says Google” — TechCrunch" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" src="https://techcrunch.com/2019/08/29/google-iphone-secretly-hacked/embed/#?secret=Kf8dsEfZXr" data-secret="Kf8dsEfZXr" width="800" height="245"></iframe></p></div><h3 id="hackerscouldstealateslamodelsbycloningitskeyfobagain"><a href="https://www.wired.com/story/hackers-steal-tesla-model-s-key-fob-encryption/" style="color: rgb(70, 165, 102);">Hackers could steal a Tesla Model S by cloning its key fob — again</a></h3><p><strong>Wired:</strong> For the second time in two years, researchers found a serious flaw in the key fobs used to unlock Tesla’s Model S cars. It’s the second time in two years that hackers have successfully cracked the fob’s encryption. Turns out the encryption key was doubled in size from the first time it was cracked. Using twice the resources, the researchers cracked the key again. The good news is that a software update can fix the issue.</p><h3 id="microsoftsleadeudatawatchdogislookingintofreshwindows10privacyconcerns"><a href="https://techcrunch.com/2019/08/27/microsofts-lead-eu-data-watchdog-is-looking-into-fresh-windows-10-privacy-concerns/" style="color: rgb(70, 165, 102);">Microsoft’s lead EU data watchdog is looking into fresh Windows 10 privacy concerns</a></h3><p><strong>TechCrunch:</strong> Microsoft could be back in hot water with the Europeans after the Dutch data protection authority asked its Irish counterpart, which oversees the software giant, to investigate Windows 10 for allegedly breaking EU data protection rules. A chief complaint is that Windows 10 collects too much telemetry from its users. Microsoft <a href="https://techcrunch.com/2017/10/13/microsofts-windows-10-breaches-privacy-law-says-dutch-dpa/">made some changes</a> after the issue was brought up for the first time in 2017, but the Irish regulator is looking at if these changes go far enough — and if users are adequately informed. Microsoft could be fined up to 4% of its global annual revenue if found to have flouted the law. Based off 2018’s figures, Microsoft could see fines as high as $4.4 billion.</p><div class="embed breakout"><blockquote class="wp-embedded-content" data-secret="SrwEgkCxmF" style="display: none;"><p><a href="https://techcrunch.com/2019/08/27/microsofts-lead-eu-data-watchdog-is-looking-into-fresh-windows-10-privacy-concerns/">Microsoft’s lead EU data watchdog is looking into fresh Windows 10 privacy concerns</a></p></blockquote><p><iframe title="“Microsoft’s lead EU data watchdog is looking into fresh Windows 10 privacy concerns” — TechCrunch" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" src="https://techcrunch.com/2019/08/27/microsofts-lead-eu-data-watchdog-is-looking-into-fresh-windows-10-privacy-concerns/embed/#?secret=SrwEgkCxmF" data-secret="SrwEgkCxmF" width="800" height="260"></iframe></p></div><h3 id="uscyberattackhurtiransabilitytotargetoiltankersofficialssay"><a href="https://www.nytimes.com/2019/08/28/us/politics/us-iran-cyber-attack.html" style="color: rgb(70, 165, 102);">U.S. cyberattack hurt Iran’s ability to target oil tankers, officials say</a></h3><p><strong>The New York Times:</strong> A secret <a href="https://techcrunch.com/2018/09/21/trumps-new-cyber-strategy-eases-rules-on-use-of-government-cyberweapons/">cyberattack</a> against Iran in June but only reported this week significantly degraded Tehran’s ability to track and target oil tankers in the region. It’s one of <a href="https://techcrunch.com/2018/10/23/first-cyber-operation-gentle-approach-russian-trolls/">several recent offensive operations</a> against a foreign target by the U.S. government in recent moths. Iran’s military seized a British tanker in July in retaliation over a U.S. operation that downed an Iranian drone. According to a senior official, the strike “diminished Iran’s ability to conduct covert attacks” against tankers, but sparked concern that Iran may be able to quickly get back on its feet by fixing the vulnerability used by the Americans to shut down Iran’s operation in the first place.</p><h3 id="appleisturningsiriaudioclipreviewoffbydefaultandbringingitinhouse"><a href="https://techcrunch.com/2019/08/28/apple-is-turning-siri-audio-clip-review-off-by-default-and-bringing-it-in-house/" style="color: rgb(70, 165, 102);">Apple is turning Siri audio clip review off by default and bringing it in house</a></h3><p><strong>TechCrunch: </strong>After Apple was caught paying contractors to review Siri queries without user permission, the technology giant said this week it will turn off <a href="https://techcrunch.com/2019/07/26/siri-recordings-regularly-sent-to-apple-contractors-for-analysis-claims-whistleblower/">human review</a> of Siri audio by default and bringing any opt-in review in-house. That means users actively have to allow Apple staff to “grade” audio snippets made through Siri. Apple began audio grading to improve the Siri voice assistant. <a href="https://techcrunch.com/2019/07/03/amazon-responds-to-a-u-s-senators-inquiry-confirms-alexa-voice-records-are-kept-indefinitely/">Amazon</a>, <a href="https://techcrunch.com/2019/08/13/facebook-contractors-said-to-have-collected-and-transcribed-users-audio-without-permission/">Facebook</a>, <a href="https://techcrunch.com/2019/07/11/google-is-investigating-the-source-of-voice-data-leak-plans-to-update-its-privacy-policies/">Google</a>, and <a href="https://techcrunch.com/2019/08/15/microsoft-tweaks-privacy-policy-to-admit-humans-can-listen-to-skype-translator-and-cortana-audio/">Microsoft</a> have all been caught out using contractors to review user-generated audio.</p><div class="embed breakout"><blockquote class="wp-embedded-content" data-secret="elSrr8m6yH" style="display: none;"><p><a href="https://techcrunch.com/2019/08/28/apple-is-turning-siri-audio-clip-review-off-by-default-and-bringing-it-in-house/">Apple is turning Siri audio clip review off by default and bringing it in house</a></p></blockquote><p><iframe title="“Apple is turning Siri audio clip review off by default and bringing it in house” — TechCrunch" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" src="https://techcrunch.com/2019/08/28/apple-is-turning-siri-audio-clip-review-off-by-default-and-bringing-it-in-house/embed/#?secret=elSrr8m6yH" data-secret="elSrr8m6yH" width="800" height="246"></iframe></p></div><h3 id="hackersareactivelytryingtostealpasswordsfromtwowidelyusedvpns"><a href="https://arstechnica.com/information-technology/2019/08/hackers-are-actively-trying-to-steal-passwords-from-two-widely-used-vpns/" style="color: rgb(70, 165, 102);">Hackers are actively trying to steal passwords from two widely used VPNs</a></h3><p><strong>Ars Technica:</strong> Hackers are targeting and exploiting vulnerabilities in two popular corporate virtual private network (VPN) services. Fortigate and Pulse Secure let remote employees tunnel into their corporate networks from outside the firewall. But these VPN services contain flaws which, if exploited, could let a skilled attacker tunnel into a corporate network without needing an employee’s username or password. That means they can get access to all of the internal resources on that network — potentially leading to a major data breach. News of the attacks came a month after the vulnerabilities in widely used corporate VPNs <a href="https://techcrunch.com/2019/07/23/corporate-vpn-flaws-risk/">were first revealed</a>. Thousands of vulnerable endpoints exist — months after the bugs were fixed.</p><h3 id="grandjuryindictsallegedcapitalonehackerovercryptojackingclaims"><a href="https://techcrunch.com/2019/08/28/federal-grand-jury-indicts-paige-thompson-on-two-counts-related-to-the-capital-one-data-breach/" style="color: rgb(70, 165, 102);">Grand jury indicts alleged Capital One hacker over cryptojacking claims</a></h3><p><strong>TechCrunch:</strong> And finally, just when you thought the Capital One breach <a href="https://techcrunch.com/2019/07/29/capital-one-breach-was-inevitable/">couldn’t get any worse</a>, it does. A federal grand jury said the accused hacker, Paige Thompson, should be indicted on new charges. The alleged hacker is said to have created a tool to detect cloud instances hosted by Amazon Web Services with misconfigured web firewalls. Using that tool, she is accused of breaking into those cloud instances and installing cryptocurrency mining software. This is <a href="https://techcrunch.com/2019/04/25/cryptojacking-nsa-malware/">known as “cryptojacking,”</a> and relies on using computer resources to mine cryptocurrency.</p><div class="embed breakout"><blockquote class="wp-embedded-content" data-secret="7Chy4Z8d7m" style="display: none;"><p><a href="https://techcrunch.com/2019/08/28/federal-grand-jury-indicts-paige-thompson-on-two-counts-related-to-the-capital-one-data-breach/">Federal grand jury indicts Paige Thompson on two counts related to the Capital One data breach</a></p></blockquote><p><iframe title="“Federal grand jury indicts Paige Thompson on two counts related to the Capital One data breach” — TechCrunch" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" src="https://techcrunch.com/2019/08/28/federal-grand-jury-indicts-paige-thompson-on-two-counts-related-to-the-capital-one-data-breach/embed/#?secret=7Chy4Z8d7m" data-secret="7Chy4Z8d7m" width="800" height="275"></iframe></p></div></div>',
  },
  {
    title: 'Meet Olli 2.0, a 3D-printed autonomous shuttle',
    slug: 'meet-olli-20-a-3d-printed-autonomous-shuttle',
    status: 1,
    categoryIds: [1],
    description: '',
    content: '<p>From afar, Olli resembles many of the “future is now!” electric autonomous shuttles that have popped up in recent years.<br/>The tall rectangular pod, with its wide-set headlights and expansive windows nestled between a rounded frame, gives the shuttle a friendly countenance that screams, ever so gently, “come along, take a ride.”<br/>But Olli is different in almost every way, from how it’s produced to its origin story. And now, its maker, <a href="https://crunchbase.com/organization/local-motors" target="_blank" data-type="organization" data-entity="local-motors" class="crunchbase-link">Local Motors, </a> has given Olli an upgrade in hopes of accelerating the adoption of its autonomous shuttles.<br/>Meet Olli 2.0, a 3D-printed connected electric autonomous shuttle that Rogers says will hasten its ubiquity.<br/>“The future is here; it’s just not evenly distributed,” Local Motors co-founder and CEO John B. Rogers Jr. said in a recent interview. “That’s something I say a lot. Because people often ask me, ‘Hey, when will I see this vehicle? 2023? What do you think?’ My response: It’s here now, it’s just not everywhere.”<br/>Whether individuals will adopt Rogers’ vision of the future is another matter. But he argues that Olli 1.0 has already been a persuasive ambassador.<br/></p><div class="media-wrap image-wrap"></div><p><br/>Olli 1.0 made its debut in 2016 when it launched in National Harbor, Md., at a planned mixed-use development a few miles south of Washington, D.C. In the two years since, Olli has shown up at events such as LA Automobility, and been featured by various media outlets, including <a href="https://techcrunch.com/2016/06/16/ibms-watson-makes-a-move-into-self-driving-cars-with-olli-a-minibus-from-local-motors/">this one</a>.  Heck, even <a href="https://www.youtube.com/watch?v=4XDwxvCQozg">James Cordon</a> rode in it.<br/>Local Motors, which was founded in 2007, and its Olli 1.0 shuttle are familiar figures in the fledgling autonomous vehicle industry. But they’re often overshadowed by the likes of Argo AI, Cruise, Uber and Waymo — bigger companies that are all pursuing robotaxis designed for cities.<br/>Olli, meanwhile, is designed for campuses, low-speed environments that include hospitals, military bases and universities.<br/>“The public isn’t going to see New York City with autonomous vehicles running around all the time (any time soon),” Rogers said. Campuses, on the other hand, are a sweet spot for companies like Local Motors that want to deploy now. These are places where mobility is needed and people are able to get up close and personal with a “friendly robot” like Olli, Rogers said. <br/>Olli 2.0<br/>Olli and Olli 2.0 are clearly siblings. The low-speed vehicle has the same general shape, and a top speed of 25 miles per hour. And both have been <a href="https://www.theverge.com/2019/3/8/18255176/local-motors-olli-3d-printed-self-driving-shuttle-crash-test-footage">crash tested</a> by Local Motors and come with Level 4 autonomous capability, a designation by the SAE that means the vehicle can handle all aspects of driving in certain conditions without human intervention.<br/>Olli 2.0 has a lot more range — up to 100 miles on a single charge, according to its spec sheet. The manufacturing process has been improved, and Olli 2.0 is now 80% 3D-printed and has hub motors versus the axle wheel motors in its predecessor. In addition, there are two more seats in Olli 2.0 and new programmable lighting.<br/>But where Olli 2.0 really stands out is in the improved user interface and more choices for customers looking to customize the shuttle to suit specific needs. As Rogers recently put it, “We can pretty much make anything they ask for with the right partners.”<br/></p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://techcrunch.com/wp-content/uploads/2019/08/Ollieyes1-1.jpg"></a></div><p><br/>The outside of Olli 2.0 is outfitted with a PA system and screens on the front and back to address pedestrians. The screen in the front can be shown as eyes, making Olli 2.0 more approachable and anthropomorphic.<br/>Inside the shuttle, riders will find better speakers and microphones and touchscreens. Local Motors has an open API, which allows for an endless number of UI interfaces. For instance, LG is customizing media content for Olli based on the “5G future,” according to Rogers, who said he couldn’t provide more details just yet.<br/>AR and VR can also be added, if a customer desires. The interior can be changed to suit different needs as well. For instance, a hospital might want fewer seats and more room to transport patients on beds. It’s this kind of customization that Rogers believes will give Local Motors an edge over autonomous shuttle competitors.<br/></p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://techcrunch.com/wp-content/uploads/2019/08/Olli_2.0_Interior.jpg"></a></div><p><br/>Even the way Olli 2.0 communicates has been improved.<br/>Olli 1.0 used IBM Watson, the AI platform from IBM, for its natural language and speech to text functions. Olli 2.0 has more options. Natural language voice can use Amazon’s deep learning chatbot service Lex and IBM Watson. Customers can choose one or even combine them. Both can be altered to make the system addressable to “Olli.”<br/>The many people behind Olli<br/>In the so-called race to deploy autonomous vehicles, Local Motors is a participant that is difficult to categorize or label largely due to how it makes its shuttles.<br/>It’s not just that Local Motors’ two micro factories — at its Chandler, Ariz. headquarters and in Knoxville, Tenn. — are a diminutive 10,000 square feet. Or that these micro factories lack the tool and die and stamping equipment found in a traditional automaker’s factory. Or even that Olli is 3D-printed.<br/>A striking and perhaps less obvious difference is how Olli and other creations from Local Motors, and its parent company Local Motors Industries, come to life. LMI has a co-creation and low-volume local production business model. The parent company’s <a href="https://launchforth.io/">Launch Forth</a> unit manages a digital design community of tens of thousands of engineers and designers that co-creates products for customers. Some of those mobility creations go to Local Motors, which uses its low-volume 3D-printed micro factories to build Olli and <a href="https://launchforth.io/Subhadra20/refine-olli-20/overview/">Olli 2.0</a>, as well as other products like the Rally Fighter.<br/>This ability to tap into its community and its partnerships with research labs, combined with direct digital manufacturing and its micro factories, is what Rogers says allows it to go from design to mobile prototype in weeks, not months — or even years.<br/><br/>The company issues challenges to the community. The winner of a challenge gets a cash prize and is awarded royalties as the product is commercialized. <span><span>In 2016, a Bogota, Colombia man named <a href="https://www.npr.org/sections/alltechconsidered/2016/06/29/471599187/a-24-year-old-designed-a-self-driving-minibus-maker-built-it-in-weeks">Edgar Sarmiento</a> won the Local Motors challenge to </span></span>design an urban public transportation system. His design eventually became Olli.<br/>(Local Motors uses the <a href="https://localmotors.com/pacificnw/">challenges model</a> to determine where Olli will be deployed, as well.)<br/>New design challenges are constantly being launched to improve the UI and services of Olli, as well as other products. But even that doesn’t quite capture the scope of the co-creation. Local Motors partners with dozens of companies and research organizations. Its 3D-printing technology comes from <a href="https://www.oakridger.com/news/20171114/microfactory-for-local-motors-only-short-distance-from-oak-ridge">Oak Ridge National Laboratory</a>, and Olli itself involves a who’s who in the sensor, AV and supplier communities.<br/>Startup Affectiva provides Olli’s cognition system, such as facial and mood tracking of its passengers and dynamic route optimization, while Velodyne, Delphi, Robotic Research and Axis Communications handle the perception stack of the self-driving shuttle, according to Local Motors. Nvidia and Sierra Wireless provide much of the Human Machine Interface. Other companies that supply the bits and pieces to Olli include Bosch, Goodyear, Protean and Eastman, to name just a few.<br/>Where in the world is Olli?<br/>Today, Olli 1.0 is deployed on nine campuses, the most recent ones at the <a href="https://localmotors.com/greater-washington-challenge/">Joint Base Myer – Henderson Hall</a>, a joint base of the U.S. military located around Arlington, Va., which is made up of Fort Myer, Fort McNair and Henderson Hall. Olli was also introduced recently in Rancho Cordova, near Sacramento, Calif.<br/>Production of Olli 2.0 began in July and deliveries will begin in the fourth quarter of this year. In the meantime, three more Olli shuttle deployments are coming up in the next six weeks or so, according to Local Motors, which didn’t provide further details.<br/>Production of Olli 1.0 will phase out in the coming months as customer orders are completed. Olli will soon head to Europe, as well, with Local Motors planning to build its third micro factory in the region.</p>',
  },
 {
    title: 'Bear Robotics is raising big bucks for robots that deliver food to restaurant patrons',
    slug: 'bear-robotics-is-raising-big-bucks-for-robots-that-deliver-food-to-restaurant-patrons',
    status: 1,
    categoryIds: [1],
    description: '',
    content: '<p><a href="https://www.cnbc.com/2019/08/29/elon-musk-ai-will-make-jobs-kind-of-pointless-so-study-this.html">Some days</a>, it feels like there’s almost no end to the number of jobs that might be replaced altogether or in some part by smart machines, from <a href="https://med.stanford.edu/news/all-news/2018/11/ai-outperformed-radiologists-in-screening-x-rays-for-certain-diseases.html">radiologists</a> to <a href="https://www.atbs.com/knowledge-hub/trucking-blog/self-driving-trucks-are-truck-drivers-out-of-a-jo">truck drivers</a> to, gulp, <a href="https://observer.com/2019/07/journalism-robots-reporters-jobs-artificial-intelligence/">journalists</a>. You might be tempted to sob about it to your friendly restaurant server, but wait! It’s a robot, too!<br/>So it may be if the 25-person, Redwood City, Calif.,-based startup <a href="https://www.bearrobotics.ai/">Bear Robotics</a> has its way. The two-year-old company makes “robots that help,” and specifically, it makes robots that help deliver food to restaurant customers.<br/>It’s a market that’s seemingly poised for disruption. As Bear says in its own literature about the company, it was founded to address the “increased pressure faced by the food service industry around wages, labor supply, and cost efficiencies.”<br/>CEO John Ha, a former Intel research scientist turned longtime technical lead at Google who also opened, then closed, his <a href="https://www.yelp.com/biz/kang-nam-tofu-house-milpitas">own restaurant</a>, witnessed the struggle firsthand. As the child (and grandchild) of restaurateurs, this editor can also attest that owning and operating restaurants is a tricky proposition, given the expenses and — even more plaguing oftentimes — the turnover that goes with it.<br/>Investors are apparently on board with the idea with robot servers. According to a new <a href="https://www.sec.gov/Archives/edgar/data/1786432/000178643219000001/xslFormDX01/primary_doc.xml">SEC filing</a>, Bear has so far locked down at least $10.2 million from a dozen investors on its way to closing a $35.8 million round. That’s not a huge sum for many startups today, but it’s notable for a food service robot startup, one whose first model, “Penny,” spins around R2-D2-like, gliding between the kitchen and dining tables with customers’ food as it is prepared.<br/>At least, this is what will theoretically happen once Bear begins lining up restaurants that will pay the company via a monthly subscription that includes the robot, setup and mapping of the restaurant (so Penny doesn’t collide with things), along with technical support.<br/>In the meantime, Bear’s backers, which the startup has yet to reveal, may be taking a cue in part from Alibaba, which last year opened a <a href="https://thespoon.tech/alibaba-opens-robot-restaurant-as-automation-expands-around-the-globe/">highly automated restaurant</a> in Shanghai where small robots slide down tracks to deliver patrons’ meals.<br/>They may also be looking at the bigger picture, wherein everything inside restaurants is getting automated — from robotic chefs that fry up ingredients to table-mounted self-pay tablets — with servers one of the last pieces of the puzzle to be addressed.<br/>That doesn’t mean Bear or other like-minded startups will take off any time soon in restaurants that <em>aren’t</em> offering a futuristic experience. One of the reasons that people have always headed to restaurants is for good-old human interaction. In fact, with <a href="https://www.forbes.com/sites/michelinemaynard/2019/01/27/ready-when-i-get-there-mobile-takeout-is-a-rising-restaurant-trend/#39f65b2312f5">take-out ordering on the rise</a>, people — waiters, bartenders, restaurant owners who flit around the dining room to say hello — may prove one of the only reasons that customers show up at all.</p>',
  },
  {
    title: 'YouTube Kids launches on the web',
    slug: 'youtube-kids-launches-on-the-web',
    status: 1,
    categoryIds: [1],
    description: '到目前为止，宜家在智能家居领域的投资一直都很聪明，但也很分散。本周，这个瑞典家居用品巨头表示，将设立全新的业务部门来专注于智能家居业务。',
    content: '<p> </p><div class="media-wrap image-wrap"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/08/535975.jpg?w=738"/></div><p>到目前为止，宜家在智能家居领域的投资一直都很聪明，但也很分散。本周，这个瑞典家居用品巨头表示，将设立全新的业务部门来专注于智能家居业务。<br/> 该公司的智能家居项目开始于 2012 年，专注于无线充电和智能照明。自那时以来，宜家在这两大领域都进行了多次尝试，为其家具产品开发自安装、集成的无线充电器，以及光/充电器组合，并且与 Sonos 达成合作，开发 <a href="https://techcrunch.com/2019/07/25/sonos-and-ikeas-symfonisk-wireless-speakers-are-a-symphony-of-sound-and-design/" target="_blank">Symfonisk 系列无线智能音箱</a>。<br/> 宜家的目标是成为未来智能家居产品的中枢，不仅从硬件角度，也会通过其 Home 智能应用。宜家今年 6 月宣布，将<a href="https://techcrunch.com/2017/05/23/ikeas-smart-light-bulbs-will-work-with-amazon-alexa-apple-siri-and-google-assistant/" target="_blank">互联灯泡品牌 Tradfri</a> 升级至 Home。在 Symfonisk 的发布会上，宜家曾表示，该公司对 Home 应用有着更远大的目标，希望将其发展成为用户控制智能家居的中枢<br/> 新成立的宜家家居智能业务负责人比昂·布洛克（Bjorn Block）表示：“在宜家，我们希望继续为未来许多人提供更棒的家居生活产品。因此，我们需要探索除传统家居之外的产品和解决方案。”<br/> 宜家还表示，这将是自 “儿童宜家” 产品线推出以来，宜家在整体业务和品牌方面最重要的新核心领域。<br/> Sonos 和宜家之间关于 Symfonisk 的合作将是长期的。两家公司都表示，未来可能会有更多产品出现在这个团队。不过听起来，宜家似乎打算探索智能家居技术可能如何影响其业务的方方面面。因此可以预计，作为这一新投资重点的成果，宜家将会达成新的合作，推出更多新的产品品类。<br/> 翻译：维金<br/> <a href="https://techcrunch.com/2019/08/17/ikea-doubles-down-on-smart-home-tech-with-new-business-unit/" target="_blank">Ikea doubles down on smart home tech with new business unit</a><br/> </p>',
  },
  { title: 'EMPTY-DEMO-20', slug: 'empty-demo-20', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-20', content: '<p>EMPTY-CONTENT-20</p>' },
  { title: 'EMPTY-DEMO-21', slug: 'empty-demo-21', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-21', content: '<p>EMPTY-CONTENT-21</p>' },
  { title: 'EMPTY-DEMO-22', slug: 'empty-demo-22', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-22', content: '<p>EMPTY-CONTENT-22</p>' },
  { title: 'EMPTY-DEMO-23', slug: 'empty-demo-23', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-23', content: '<p>EMPTY-CONTENT-23</p>' },
  { title: 'EMPTY-DEMO-24', slug: 'empty-demo-24', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-24', content: '<p>EMPTY-CONTENT-24</p>' },
  { title: 'EMPTY-DEMO-25', slug: 'empty-demo-25', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-25', content: '<p>EMPTY-CONTENT-25</p>' },
  { title: 'EMPTY-DEMO-26', slug: 'empty-demo-26', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-26', content: '<p>EMPTY-CONTENT-26</p>' },
  { title: 'EMPTY-DEMO-27', slug: 'empty-demo-27', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-27', content: '<p>EMPTY-CONTENT-27</p>' },
  { title: 'EMPTY-DEMO-28', slug: 'empty-demo-28', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-28', content: '<p>EMPTY-CONTENT-28</p>' },
  { title: 'EMPTY-DEMO-29', slug: 'empty-demo-29', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-29', content: '<p>EMPTY-CONTENT-29</p>' },
  {
    title: '树莓派 4 无法兼容所有 USB-C 线缆',
    slug: 'raspberry-pi-4-usb3',
    status: 1,
    categoryIds: [1],
    description: '树莓派 4（Raspberry Pi 4）是一只体型小巧的性能怪，但科技博主泰勒·沃德（Tyler Ward）在它的 USB Type-C 连接器中发现了一个缺陷。树莓派基金会（Raspberry Pi Foundation）向科技媒体 TechRepublic 证实了设计缺陷的存在，即树莓派 4 可能无法兼容某些类型的 USB-C 线缆。',
    content: '<p> </p><div class="media-wrap image-wrap"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/07/raspberry-pi-4-8b.jpg?w=738"/></div><p>树莓派 4（Raspberry Pi 4）是一只<a href="https://techcrunch.com/2019/06/23/the-raspberry-pi-foundation-unveils-the-raspberry-pi-4/" target="_blank">体型小巧的性能怪</a>，但科技博主泰勒·沃德（Tyler Ward）在它的 USB Type-C 连接器中<a href="https://www.scorpia.co.uk/2019/06/28/pi4-not-working-with-some-chargers-or-why-you-need-two-cc-resistors/" target="_blank">发现了一个缺陷</a>。树莓派基金会（Raspberry Pi Foundation）向科技媒体 TechRepublic <a href="https://www.techrepublic.com/article/your-new-raspberry-pi-4-wont-power-on-usb-c-cable-problem-now-officially-confirmed/" target="_blank">证实</a>了设计缺陷的存在，即树莓派 4 可能无法兼容某些类型的 USB-C 线缆。<br/> 这个问题倒不至于让我们一票否决树莓派 4，而且我们应该会看到未来版本的电路板会采用正确的 USB-C 协议。但如果你绞尽脑汁也搞不明白为什么连上 USB-C 线缆后无法给树莓派供电，现在你知道原因了。<br/> 树莓派基金会发布了电路板的原理图，我们可以从中看到，它少用了一个碳素混合体电阻，其作用是让复杂的充电器为设备供电。<br/> 鉴于 USB-C 是一种复杂的连接器，而且一些线缆是带电子标记的，这意味着它们内置了集成芯片，用以为各种设备提供支持。<br/> 举例来说，你可以使用 MacBook Pro 的充电器为很多种 USB-C 接口的设备供电，充电器能够自行判断它要为设备输送多大功率的电流。<br/> 但树莓派 4 不支持带电子标记的线缆，比如苹果推出的 USB-C 线缆以及谷歌 Pixel 3 采用的线缆。如果使用这样的线缆，树莓派 4 会被错误地识别为音频适配器。<br/> 幸运的是，这不会对树莓派 4 造成损坏，而且也没有引发火灾的风险，只不过是无法为树莓派 4 供电。<br/> “我预计这会在未来版本的电路板中得到修复，但眼下用户将需要采用我们建议的解决方法。令人惊讶的是，这个问题没有在我们（相当广泛的）现场测试中出现。” 树莓派基金会创始人埃本·厄普顿（Eben Upton）告诉 TechRepublic。<br/> 一个简单的解决方法是，购买不带电子标记的线缆或充电器，比如树莓派基金会官方正在销售的这款 <a href="https://www.raspberrypi.org/products/type-c-power-supply/" target="_blank">8 美元的 USB-C 充电器</a>。在笔者过去几周的测试中，树莓派 4 一直运转良好。<br/> 翻译：王灿均（<a href="https://www.douban.com/people/remexwang/" target="_blank">@何无鱼</a>）<br/> <a href="https://techcrunch.com/2019/07/09/the-raspberry-pi-4-doesnt-work-with-all-usb-c-cables/?tdsourcetag=s_pctim_aiomsg" target="_blank">The Raspberry Pi 4 doesn’t work with all USB-C cables</a><br/> </p>',
  },
  {
    title: '苹果今年和明年新款 MacBook 将采用全新键盘设计',
    slug: 'macbook-2019-keyboard',
    status: 1,
    categoryIds: [1],
    description: '跟踪苹果的知名分析师郭明錤发布的一份最新报告称，苹果将更换 MacBook Air 和 MacBook Pro 电脑中键盘的底层技术。郭明錤的预测通常都是准确的，这些消息来自苹果的供应链。',
    content: '<p> </p><div class="media-wrap image-wrap"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/07/macbookprotouchbarediting2.jpg?w=738"/></div><p>跟踪苹果的知名分析师郭明錤发布的<a href="https://9to5mac.com/2019/07/04/kuo-new-keyboard-macbook-air-pro/" target="_blank">一份最新报告</a>称，苹果将更换 MacBook Air 和 MacBook Pro 电脑中键盘的底层技术。郭明錤的预测通常都是准确的，这些消息来自苹果的供应链。<br/> 郭明錤在最新报告中表示，将于今年晚些时候推出的全新 MacBook Air 机型将会搭载新的键盘设计，新款 MacBok Pro 也是如此。不过郭明錤表示，后者至少要到 2020 年才会推出。新产品将放弃当前一代的 “蝴蝶” 键盘设计，转而使用基于 “剪刀开关” 的键盘。目前苹果单独售卖的 Magic Keyboard 也采用剪刀开关设计。<br/> 苹果在 MacBook 中使用的蝴蝶型开关键盘一直受到用户的批评。用户不断投诉键帽脱落和容易重复击键等问题（从 2015 年以来，我自己在多款 MacBook Pro 机型上都遇到过这种情况）。这些问题通常可以通过用压缩空气清理键帽下的脏物来解决，但用户也提出苹果需要更换键盘元件。<br/> 苹果最新款 MacBook Pro 于<a href="https://techcrunch.com/2019/05/21/apple-announces-new-macbook-pros-with-more-powerful-processors-and-yes-updated-keyboards/" target="_blank">今年早些时候推出</a>，搭载了重新设计的蝴蝶键盘，采用 “新材料” 来协助解决这些问题。苹果最近还启动了 MacBook、MacBook Air 和 MacBook Pro 的免费键盘更换计划，覆盖所有搭载蝴蝶键盘的 MacBook 型号。不过，如果郭明錤的报告是准确的，那么看起来苹果正在采取更永久性的解决办法。<br/> 一如既往，任何来自第三方、未发布的产品传闻都值得怀疑。不过，郭明錤以往的消息准确性，以及苹果目前键盘设计存在的问题为这方面的传闻增加可信度。<br/> 翻译：维金<br/> <a href="https://techcrunch.com/2019/07/04/apple-reportedly-shifting-to-new-keyboard-design-in-2019-2020-macbooks/" target="_blank">Apple reportedly shifting to new keyboard design in 2019/2020 MacBooks</a><br/> </p>',
  },
  {
    title: '亚马逊推出 3 代 Kindle Oasis，加入色温调节功能',
    slug: 'kindle-oasis-s',
    status: 1,
    categoryIds: [1],
    description: '',
    content: '<p> </p><div class="media-wrap image-wrap"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/06/kindle-oasis-front-light.jpg?w=738"/></div><p>对电子书阅读器爱好者来说，<a href="https://techcrunch.com/2017/10/31/amazons-new-kindle-oasis-is-the-best-e-reader-a-lot-of-money-can-buy/" target="_blank">Kindle Oasis</a> 可以说是最好的产品了。在这个产品类别中，亚马逊是挺立到最后的巨头玩家（除非你认为巴诺书店还算 “挺立” 着），而 Oasis 是他们制造的最好 Kindle，货真价实。在 2017 年年底时，我曾对当时最新款的 Oasis 进行过评测，我十分享受使用它的美好时光。<br/> 现在，亚马逊对 Oasis 进行了迭代，让这份美好继续延续。但首先需要说清楚的是，跟最近标准版 Kindle 获得的升级一样，Oasis 这次的升级幅度也很小。从外观上看，新款 Oasis 保留了前代产品的所有优点，包括 7 英寸、300ppi 的显示屏，以及翻页实体按钮。<br/> 这次的重大变化在于，新款 Oasis 加入了调节显示屏色温的功能，这能够让用户在白天阅读时眼睛更加舒适，以及在夜里阅读后更好地入眠。此外，新款设备还内置了一个选项，可以全天自动调节显示屏色温。<br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/06/kindle-oasis-graphite-front.jpg" target="_blank"><img class="media-wrap image-wrap" alt="" src="https://files.techcrunch.cn/2019/06/kindle-oasis-graphite-front.jpg?w=1200&amp;h=1200"/></a></div><p><br/> 老实说，这就是新款 Oasis 的主要新卖点了。此外，它还采用了新一代的电子墨水屏技术，虽然分辨率与前代产品相同，但却提供了更高的刷新率，从而让翻页速度加快（稍后我会就此更新报道），这顺应的是科技迈向更快速度的潮流。在这里，我就不深入讲这项技术的显著优势了，这些年媒体已经做过大量的报道。<br/> 来自前代产品的功能还包括 IPX8 级防水，这意味着 Oasis 可以放在最深 2 米的水下长达 1 小时。内置的蓝牙功能可以让用户通过 Audible 收听有声读物，机身背部则采用了金属材质。<br/> 与 2017 年款一样，新款 Oasis 的 8GB 版本起价为 250 美元，32GB 版本起价为 280 美元（如果你想要无广告版本，还得再多破费一些）。亚马逊向购买新款 Oasis 的用户赠送了 6 个月的 Kindle Unlimited 服务。从周三开始，用户可以进行预订，这款产品将于 7 月 24 日开始发货，届时还有一系列不同的保护套可供选购。<br/> 翻译：王灿均（<a href="https://www.douban.com/people/remexwang/" target="_blank">@何无鱼</a>）<br/> <a href="https://techcrunch.com/2019/06/19/amazon-adds-color-adjustable-lighting-to-its-best-kindle/" target="_blank">Amazon adds color adjustable lighting to its best Kindle</a><br/> </p>',
  },
  { title: 'EMPTY-DEMO-30', slug: 'empty-demo-30', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-30', content: '<p>EMPTY-CONTENT-30</p>' },
  { title: 'EMPTY-DEMO-31', slug: 'empty-demo-31', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-31', content: '<p>EMPTY-CONTENT-31</p>' },
  { title: 'EMPTY-DEMO-32', slug: 'empty-demo-32', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-32', content: '<p>EMPTY-CONTENT-32</p>' },
  { title: 'EMPTY-DEMO-33', slug: 'empty-demo-33', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-33', content: '<p>EMPTY-CONTENT-33</p>' },
  { title: 'EMPTY-DEMO-34', slug: 'empty-demo-34', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-34', content: '<p>EMPTY-CONTENT-34</p>' },
  { title: 'EMPTY-DEMO-35', slug: 'empty-demo-35', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-35', content: '<p>EMPTY-CONTENT-35</p>' },
  { title: 'EMPTY-DEMO-36', slug: 'empty-demo-36', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-36', content: '<p>EMPTY-CONTENT-36</p>' },
  { title: 'EMPTY-DEMO-37', slug: 'empty-demo-37', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-37', content: '<p>EMPTY-CONTENT-37</p>' },
  { title: 'EMPTY-DEMO-38', slug: 'empty-demo-38', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-38', content: '<p>EMPTY-CONTENT-38</p>' },
  { title: 'EMPTY-DEMO-39', slug: 'empty-demo-39', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-39', content: '<p>EMPTY-CONTENT-39</p>' },
  { title: '-- LINE-01 --', slug: 'empty-line-01', status: 1, categoryIds: [1], description: 'EMPTY-LINE-01', content: '<p>EMPTY-CONTENT-L1</p>' },
  { title: 'EMPTY-DEMO-40', slug: 'empty-demo-40', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-40', content: '<p>EMPTY-CONTENT-40</p>' },
  { title: 'EMPTY-DEMO-41', slug: 'empty-demo-41', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-41', content: '<p>EMPTY-CONTENT-41</p>' },
  { title: 'EMPTY-DEMO-42', slug: 'empty-demo-42', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-42', content: '<p>EMPTY-CONTENT-42</p>' },
  { title: 'EMPTY-DEMO-43', slug: 'empty-demo-43', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-43', content: '<p>EMPTY-CONTENT-43</p>' },
  { title: 'EMPTY-DEMO-44', slug: 'empty-demo-44', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-44', content: '<p>EMPTY-CONTENT-44</p>' },
  { title: 'EMPTY-DEMO-45', slug: 'empty-demo-45', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-45', content: '<p>EMPTY-CONTENT-45</p>' },
  { title: 'EMPTY-DEMO-46', slug: 'empty-demo-46', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-46', content: '<p>EMPTY-CONTENT-46</p>' },
  { title: 'EMPTY-DEMO-47', slug: 'empty-demo-47', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-47', content: '<p>EMPTY-CONTENT-47</p>' },
  { title: 'EMPTY-DEMO-48', slug: 'empty-demo-48', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-48', content: '<p>EMPTY-CONTENT-48</p>' },
  { title: 'EMPTY-DEMO-49', slug: 'empty-demo-49', status: 1, categoryIds: [1], description: 'EMPTY-DEMO-49', content: '<p>EMPTY-CONTENT-49</p>' },
  { title: '-- LINE-02 --', slug: 'empty-line-02', status: 1, categoryIds: [1], description: 'EMPTY-LINE-02', content: '<p>EMPTY-CONTENT-L2</p>' },
  {
    title: '关于谷歌 I/O 发布会，你想知道的一切都在这里',
    slug: 'heres-everything-google-announced-today-at-the-i-o-2019-keynote',
    status: 1,
    categoryIds: [1],
    description: '',
    content: '<p>在今天下午举行的谷歌年度 I/O 开发者大会上，该公司在长达两小时的主题演讲中发布了一系列新产品——从新手机到下一代语音助手 Assistant——这些产品都是谷歌在过去一年开发的。<br/> 如果你没时间看完整个发布会，那也没关系，我们为你汇总了在本次发布会上亮相的最重要的产品。</p><p><br/> <strong>Pixel 3a和 3a XL</strong><br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/05/dscf5363.jpg" target="_blank"><img alt=""  class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/05/dscf5363.jpg?w=1200&amp;h=798"/></a></div><p><br/> 如传言一样，谷歌推出了价格更亲民的 Pixel 3 版本。<br/> 为了拉低价格，他们把处理器规格降低了一点（从骁龙 845 降级到了骁龙 670），将存储容量限制在 64GB，并取消了无线充电功能。好消息是，保留了 3.5 毫米耳机端口。<br/> Pixel 3a 起售价 399 美元，采用 5.6 英寸屏幕和 1220 万像素后置摄像头，运行 Android P 操作系统。Pixel 3a XL 起售价 479 美元，屏幕大小提升至 6.0 英寸。<br/> TechCrunch 的布莱恩·希特（Brian Heater）曾在本周早些时候试用过 Pixel 3a 和 3a XL，你可以点击<a href="https://techcrunch.com/2019/05/07/googles-budget-pixel-3a-starts-at-399-available-in-purple-ish/" target="_blank" rel="noopener">这里</a>查看他的上手体验。<br/> <strong>Nest Hub和 Nest Hub Max</strong><br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/05/screen-shot-2019-05-07-at-11.19.42-am.png" target="_blank"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/05/screen-shot-2019-05-07-at-11.19.42-am.png?w=1200&amp;h=707"/></a></div><p><br/> 谷歌智能家居设备 Home Hub 将更名为 “Nest Hub”，价格也从 149 美元下调至 129 美元。<br/> 与此同时，它还有了一个 “大兄弟”：Nest Hub Max。Nest Hub Max 的屏幕从 Nest Hub 的 7 英寸升级到了 10 英寸，同时还增加了一枚摄像头。Nest Hub Max 将绑定到 Nest 应用中，令其能像其他 Nest Cam 摄像头一样工作。谷歌说，Nest Hub Max 背面的硬件开关可以禁用摄像头/麦克风。这款产品的售价为 229 美元，今年夏天发货。<br/> Nest Hub Max 上的新功能 “面部匹配”（Face Match）将可以识别用户的面部，对其反应进行定制。在一篇介绍该功能的博文中，谷歌表示 “‘面部匹配’ 的人脸识别是通过设备上的机器学习在本地处理的，因此摄像头数据不会离开设备。”<br/> <strong>搜索结果中加入 AR 效果</strong><br/> 现在，某些搜索结果中将包括 3D 模型，比如搜索某种鞋型，或是 “大白鲨”。点击这个 3D 模型，你就可以通过增强现实把它放入到现实世界的视角中。<br/> <strong>Google Lens升级</strong><br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/05/2-receipts.png" target="_blank"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/05/2-receipts.png?w=1200&amp;h=675"/></a></div><p><br/> Google Lens 正在学习一些新技能。将 Google Lens 对准餐厅的菜单，它会高亮显示餐厅中最受欢迎的菜品。将 Google Lens 对准你的收据，它会自动计算小费和总额之类的东西。<br/> <strong>网络版 Duplex</strong><br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/05/car-rental.png" target="_blank"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/05/car-rental.png?w=1200&amp;h=836"/></a></div><p><br/> 在去年的 I/O 开发者大会上，谷歌推出了 Duplex，这是一款由人工智能驱动的客户服务工具，旨在帮助餐馆和发廊这样的小企业接听更多来电，回答常见问题，安排预订或预约各类服务。<br/> 今年，通过在网络上开放 Duplex，它的功能将进一步扩大。以网上租车为例，你只要说 “通过租车公司给我租辆车”，它就会抓取租车公司的网站，并自动开始为你预约车辆。它可以根据用户 Gmail 邮件中之前的租车确认信息，预先填写诸如旅行日期和用户偏爱的车型等信息。<br/> <strong>新一代语音助手</strong><br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/05/next-gen-assistant.png" target="_blank"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/05/next-gen-assistant.png?w=1200&amp;h=641"/></a></div><p><br/> 谷歌已经成功地将语音识别模块从数百 GB 缩小到 0.5GB，这样一来，语音识别模块就可以直接安装在手机上。<br/> 通过将其存储在本地，他们就能够消除数据在传输至云端过程中的延迟问题，使用户与 Assistant 的会话几乎是即时完成的。当它在设备上运行时，甚至可以在飞行模式下工作。谷歌通过快速发送语音请求来展示 Assistant 的新速度，而语音指令（如 “给我叫辆 Lyft”，或是 “打开我的闪光灯”）和由此导致的行动之间几乎没有延迟。<br/> 谷歌表示，新一代语音助手 Assistant 将于今年晚些时候登陆新款 Pixel 手机。<br/> <strong>Waze集成 Assistant</strong><br/> 谷歌 Assistant 将被整合到地图应用 Waze，而且 “将在几周内” 发布，让用户能够通过语音来从事一些任务，比如报告事故或坑洼地带。<br/> <strong>Assistant驾驶模式</strong><br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/05/driving-mode.png" target="_blank"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/05/driving-mode.png?w=1200&amp;h=760"/></a></div><p><br/> 现在，你只要说出 “嘿，谷歌，让我们开车吧”，语音助手 Assistant 就会切换到驾驶模式，这是一个极简主义的快速查看仪表盘系统，旨在开车的同时还能满足你的一些需要，比如前往日常景点的方位和音乐控制。<br/> <strong>谷歌地图加入匿名模式</strong><br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/05/incognito-map.png" target="_blank"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/05/incognito-map.png?w=1200&amp;h=605"/></a></div><p><br/> 就像浏览器中的隐身或匿名（Incognito mode）模式一样，谷歌地图中的新匿名模式将避免目的地搜索或路线数据被保存到你的谷歌账户历史记录中。<br/> <strong>实时字幕和实时答录机</strong><br/> Android 很快就能自动为你的手机媒体生成字幕，包括你已经保存的播客和你已经录制的视频。通过谷歌称之为 “实时答录”（Live Relay）的功能，它还可以实时录制电话通话，并允许用户通过文本进行回复。<br/> 以下是谷歌公布的 Live Relay 演示视频：<br/> <br/> <strong>Euphonia项目</strong><br/> 谷歌正在研究如何推广其人工智能语音算法，以更好地理解有语言障碍的用户（如 ALS 患者或中风患者），同时对个别用户的语言模型进行量身定制，以更好地帮助他们进行交流。<br/> <br/> <strong>黑色主题</strong><br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/05/dark-theme.png" target="_blank"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/05/dark-theme.png?w=1200&amp;h=680"/></a></div><p><br/> Android Q 将有黑色模式；你可以手动启动，它也可以在省电模式下自动开启。<br/> <strong>专注模式</strong><br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/05/focus-mode.png" target="_blank"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/05/focus-mode.png?w=1200&amp;h=616"/></a></div><p><br/> 需要完成一些工作吗？借助于专注模式，你可以列出最让自己分心的应用名单，然后只要按下开关，这些应用就会消失，直到你关掉专注模式。这一功能将在今年秋天登陆 Android 平台。<br/> <strong>Pixel手机支持谷歌地图 AR 模式</strong><br/> </p><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://files.techcrunch.cn/2019/05/google-maps-ar-mode.png" target="_blank"><img alt="" class="media-wrap image-wrap" src="https://files.techcrunch.cn/2019/05/google-maps-ar-mode.png?w=1000&amp;h=759"/></a></div><p><br/> 几个月前，谷歌展示了一种新的增强现实模式——该公司一直在为谷歌地图开发这种产品，旨在确保用户从正确的方向出发。拿起你的手机，你会看到面前的世界以相机视图呈现在自己跟前。谷歌地图会将这张图片与其 “街景” 数据进行比较，以比仅使用 GPS 更好的方式来确定你的确切方位，然后画出给你指出正确方向的箭头。<br/> 这种模式已经测试了一段时间，应该会在今天晚些时候开始支持 Pixel 手机。<br/> 在以消费者为重点的主题演讲结束后不久，谷歌马上又发布了专注于开发者的主题演讲。演讲内容主要包括：<br/> </p><ul><li>谷歌<a href="https://techcrunch.com/2019/05/07/kotlin-is-now-googles-preferred-language-for-android-app-development/" target="_blank" rel="noopener">表示</a>，Kotlin 现在应该是 Android 开发者使用的最主要的编程语言。</li><li>谷歌还展示了 <a href="https://techcrunch.com/2019/05/07/google-launches-jetpack-compose-an-open-source-kotlin-based-ui-development-toolkit/" target="_blank" rel="noopener">Jetpack Compose</a>，这是一个面向 Kotlin 开发者的新 UI 工具包。</li><li>开发者现在<a href="https://techcrunch.com/2019/05/07/google-now-lets-developers-build-games-for-its-smart-displays/" target="_blank" rel="noopener">可以给谷歌智能显示设备开发游戏了</a>，比如最新发布的 Nest Hub Max。</li><li>谷歌推出<a href="https://techcrunch.com/2019/05/07/google-latest-android-studio-release-focuses-on-speed-and-stability/" target="_blank" rel="noopener">新版 Android Studio IDE</a>，专注于提高速度和稳定性。</li><li>Android 开发者现在可以要求用户在继续使用应用之前<a href="https://techcrunch.com/2019/05/07/android-developers-can-now-force-app-updates/" target="_blank" rel="noopener">对其进行更新</a>。这项功能早在去年就已发布，但直到现在才正式推出。</li></ul><p></p>',
  },
  {
    title: '两年只推出一款产品的',
    slug: 'two-years-after-essentials-launch-still-no-home-hub-or-second-phone',
    status: 1,
    categoryIds: [1],
    description: '',
    content: '<p> </p><div class="media-wrap image-wrap"><img alt="" src="https://files.techcrunch.cn/2019/05/147a2038.jpg?w=738" scale="0" class=""/></div><p>周四上午联想发布 <a href="https://techcrunch.com/2019/05/30/the-latest-modular-moto-z-has-a-beefy-battery-and-improved-low-light-camera/" target="_blank">Moto Z4</a> 的新闻给我们提供了充分的理由，让我们回过头去重新评估模块化手机的发展状态。在模块化手机问世 3 年后，这个产品概念并没有引爆市场——事实上，只有少数厂商推出了这种产品。在这些厂商中，Essential 可以说是最突出的，其首款模块化手机 <a href="https://techcrunch.com/2017/08/18/hands-on-with-andy-rubins-essential-phone/" target="_blank">PH-1</a> 配备了设计巧妙的双触点连接器。<br/> 巧合的是，周四正是 Essential 手机首次亮相的<a href="https://techcrunch.com/2017/05/30/android-creator-andy-rubins-essential-phone/" target="_blank">两周年</a>纪念日。在 <a href="https://techcrunch.com/2017/05/30/android-creator-andy-rubins-essential-phone/" target="_blank">2017 年的 Code 大会</a>上，Essential 创始人安迪·鲁宾（Andy Rubin）登上舞台，为观众带来了一些宏伟的想法以及两款产品。第一个就是 PH-1，这款手机来了又去，在数月之后的 2017 年 8 月正式发售，又于去年年底停产。另一款产品，即 <a href="https://techcrunch.com/2017/05/30/will-essential-home-be-more-than-another-dumb-smart-home-hub/" target="_blank">Essential Home 家庭助理</a>，从未上市销售。<br/> 在发布产品的那一天，Essential 首席运营官尼科洛·德玛斯（Niccolo de Masi，在那之后，他跳槽到了从 Honeywell 分拆出的独立公司 Resideo）向听众谈起了公司的 10 年计划。他承认，该公司面前是一条艰难的道路，因为他们把苹果和三星这样的巨头公司当成了对手。不过，Essential 显然不缺钱，在 Code 大会发布产品之后不久，这家初创公司便完成了<a href="https://techcrunch.com/2017/08/09/essential-confirms-300m-funding-amazon-and-best-buy-retail-availability/" target="_blank">一轮 3 亿美元的融资</a>，并跻身 “独角兽” 之列。<br/> 不过，在这两年间，Essential 一直坏消息不断。尽管 PH-1 获得的评价都很积极，但有报道称，这款手机在 2017 年仅仅卖出了 <a href="https://techcrunch.com/2018/02/12/essential-reportedly-only-shipped-88000-phones-in-2017/" target="_blank">8800 台</a>。之后，Essential 大幅下调了 PH-1 的价格，而其首款模块化配件——一款 360 度相机——价格从 250 美元暴跌至 19 美元。<br/> 去年 5 月，有传言称，Essential 已经准备<a href="https://techcrunch.com/2018/05/24/andy-rubins-essential-is-reportedly-up-for-sale-and-has-cancelled-work-on-its-next-smartphone/" target="_blank">卖身给其他公司</a>，并且取消了后续机型的研发。到了 11 月时，该公司<a href="https://techcrunch.com/2018/10/17/essential-lays-off-nearly-one-third-of-its-staff/" target="_blank">裁掉了将近三分之一的员工</a>。与此同时，安迪·鲁宾一直行事低调。同月，《纽约时报》发表了一篇爆炸性报道，其中称安迪·鲁宾因性骚扰指控从谷歌离职，而谷歌向他<a href="https://techcrunch.com/2017/11/29/andy-rubin-takes-leave-from-essential/" target="_blank">支付了 9000 美元的离职金</a>。此事导致他从 Essential 离职。<br/> 然而，一直以来，Essential 坚决否认自己已经走上穷途末路。笔者曾采访该公司的一位代表，后者表示他们有事在做，但没有透露具体细节。该公司提出了很多<a href="https://techcrunch.com/2018/03/10/essential-really-wants-to-solve-the-screen-notch-problem/" target="_blank">专利申请</a>，似乎指向他们会在以后推出的手机产品。他们在去年 6 月为 PH-1 推出了一款新模块，甚至在 12 月收购了一家公司。在本月早些时候，该公司发布了一个新的安全补丁，履行了每月发布更新的承诺——在这一点上，Essential 要比很多更加成功的智能手机厂商强很多。<br/> 这也是 Essential 的故事让人感到如此沮丧的原因之一。PH-1 是一款新奇的设备，它率先采用了为相机留位置的开孔屏。这款手机的价格为 699 美元（后来降至 499 美元），早于三星/苹果/谷歌进军廉价旗舰领域的时间。不过，即使已经跻身 “独角兽” 之列，硬件对 Essential 来说仍然是一件难做的事。而且，该公司可能是在最糟糕的时候进入了手机市场，当时智能手机的销售有史以来第一次<a href="https://techcrunch.com/2019/05/17/the-state-of-the-smartphone/" target="_blank">开始走低</a>。<br/> 在亮相两年后，我们很难不产生 Essential 大势已去的感觉。然而，就目前而言，该公司似乎是在公布新动作之前选择了韬光养晦。<br/> 图片来源：Darrell Etherington<br/> 翻译：王灿均（<a href="https://www.douban.com/people/remexwang/" target="_blank">@何无鱼</a>）<br/> <a href="https://techcrunch.com/2019/05/30/two-years-after-essentials-launch-still-no-home-hub-or-second-phone/" target="_blank">Two years after Essential’s launch, still no Home hub or second phone</a><br/> </p>',
  },
];

// prettier-ignore
export const axSeed: CreateAxInput[] = [
  { title: 'Index Swiper', description: '首页滚动图', slug: 'index-swiper', status: 1 },
  { title: 'Index Grid', description: '首页方块图', slug: 'index-grid', status: 0 },
];

// prettier-ignore
export const attachmentSeed: any[] = [
  {
    uuid: '6db325c5-9c95-4952-94eb-eef33b2e08a7',
    title: 'aaa@2x',
    alt: 'aaa@2x',
    type: 'image',
    filename: '6db325c5-9c95-4952-94eb-eef33b2e08a7.jpg',
    module_name: 'ax',
    module_id: 1,
    module_type: 'banner_mb',
    ext: '.jpg',
    width: 1200,
    height: 600,
    size: 151768,
    path: '/attachments/2019/08/6db325c5-9c95-4952-94eb-eef33b2e08a7.jpg',
    external_url: 'https://i.loli.net/2019/08/28/M7TZeuWrGc4FVmw.jpg|https://i.loli.net/2019/08/28/El6iY9INZhQ1srR.jpg',
    at2x: 1,
    in_local: 1,
    in_oss: 0,
    sort: 0,
    status: 1,
  },
  {
    uuid: 'bb9acfdc-86a1-43ca-afeb-260161455b72',
    title: 'bbb@2x',
    alt: 'bbb@2x',
    type: 'image',
    filename: 'bb9acfdc-86a1-43ca-afeb-260161455b72.jpg',
    module_name: 'ax',
    module_id: 1,
    module_type: 'banner_mb',
    ext: '.jpg',
    width: 1200,
    height: 600,
    size: 151768,
    path: '/attachments/2019/08/bb9acfdc-86a1-43ca-afeb-260161455b72.jpg',
    external_url: 'https://i.loli.net/2019/08/28/LyFwsDXvaIzO826.jpg|https://i.loli.net/2019/08/28/OCEd26tZuVg4wN7.jpg',
    at2x: 1,
    in_local: 1,
    in_oss: 0,
    sort: 0,
    status: 1,
  },
];

// prettier-ignore
export const settingSeed: CreateSettingInput[] = [
  { name: 'Site Name', slug: 'site_name', type: 'input', sort: 1, value: 'Leaa', description: '站点名，最大 220 字' },
  { name: 'Site Description', slug: 'site_description', type: 'textarea', sort: 2, value: 'Leaa - project 1h 4 1d',  description: '站点描述， 最大 220 字' },
  { name: 'Site Keywords', slug: 'site_keywords', type: 'input', sort: 3, value: 'Leaa, mono-repo, C\'est la vie. project 1h 4 1d', description: '站点关键字，使用英文 , 分隔' },
  { name: 'Currency Symbol', slug: 'currency_symbol', type: 'radio', sort: 4, value: '$', description: 'Currency Symbol', options: '$\n¥' },
];

// prettier-ignore
export const couponSeed: CreateCouponInput[] = [
  {
    type: 'coupon',
    name: 'SEED-COUPON',
    quantity: 5,
    amount: 9,
    start_time: moment().toDate(),
    expire_time: moment().add(1, 'year').toDate(),
    status: 1,
  },
  {
    type: 'coupon',
    name: '新人通用券',
    quantity: 5,
    amount: 99,
    over_amount: 9999,
    start_time: moment().toDate(),
    expire_time: moment().add(1, 'year').toDate(),
    status: 1,
  },
];

// prettier-ignore
export const promoSeed: CreatePromoInput[] = [
  {
    name: 'SEED-PROMO',
    quantity: 5,
    redeemed_quantity: 0,
    amount: 66,
    start_time: moment().toDate(),
    expire_time: moment().add(1, 'year').toDate(),
    status: 1,
  },
];
