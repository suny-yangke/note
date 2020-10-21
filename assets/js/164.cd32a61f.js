(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{528:function(a,e,n){"use strict";n.r(e);var s=n(42),t=Object(s.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"ruby-基础知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ruby-基础知识"}},[a._v("#")]),a._v(" Ruby 基础知识")]),a._v(" "),n("h2",{attrs:{id:"进入环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进入环境"}},[a._v("#")]),a._v(" 进入环境")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("irb #进入Ruby环境\nputs #打印结果\n7.class => Fixnum  # 在Ruby裡面，萬物皆有類別。通过`XX.class`查看\n")])])]),n("ul",[n("li",[a._v("字符串")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('""  # 用双引号创建「字面量字符串」\n"foobar" + "bar"  # 字符串连接\n\n# (#{}) 插值操作\nfirst_name = "Michael"\n"#{first_name} Hartl" # Michael Hartl\n\n# Ruby 不会对单引号插值\n\'\\n\'  # 得到的结果也是 "\\\\n" 单引号内就是字面量内容，免手动转义\n')])])]),n("ul",[n("li",[a._v("打印字符串")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('puts "foo"  # 打印后会返回空的字面量\nprint "foo"  # 不会添加 \\n\n')])])]),n("ul",[n("li",[a._v("数组")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('"foo bar baz".split  # ["foo", "bar", "baz"]\n\n"fooxbarxbazx".split(\'x\')  # 用 x 进行分割\n\na.first\na.second  # Rails 扩展的\na.last  # synonym 别名系统\n\na[-1]  # 倒数第一个数\n\na.sort  # 排序\na.reverse  # 反转\na.shuffle #?\n\n# 如果需要改变数组，那么使用 ！(bang)\na.sort!\n\na.push(6)  # 数组尾部添加数组\na << 7  # 尾部添加\na << "foo" << "bar"  # 串联添加\n\na.join(\',\')  # 连接操作\n\nArray 可以直接相加\n')])])]),n("ul",[n("li",[a._v("Range")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('\n(0..9).to_a  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n\na = %w[foo bar baz quux]  # ["foo", "bar", "baz", "quux"]\n\na[0..2]  # ["foo", "bar", "baz"]\n\n(\'a\'..\'e\').to_a  # ["a", "b", "c", "d", "e"]\n')])])]),n("ul",[n("li",[a._v("block")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("(1..5).each { |i| puts 2*i }  # 把块传给 each 方法；i 两侧| 用来定义块变量\n\n(1..5).each do |i|  # 块的另一种写法；单行用花括号，多行用 do..end\n  puts 2*1\nend\n\n3.times { puts \"Betelguese!\" } # 可以没有变量，执行三次\n\n# 块是一个闭包\n\n# map 返回的是每个元素执行后的结果，数组\n(1..5).map { |i| i**2 }  # [1, 4, 9, 16, 25]\n\n# 生成字母表数组，打乱数组，取出前8个元素，合并未字符串\n('a'..'z').to_a.shuffle[0..7].join\n")])])]),n("h2",{attrs:{id:"hash-和-symbol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hash-和-symbol"}},[a._v("#")]),a._v(" Hash 和 Symbol")]),a._v(" "),n("p",[a._v("Hash 本质就是数组，只是索引不局限于使用数字。且没有顺序")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('user = {} # 创建空 {}\n\nuser["first_name"] = "Michael"\n.\n.\nuser  # {"last_name"=>"Hartl", "first_name"=>"Michael"}\n\nuser = { "first_name" => "Michael", "last_name" => "Hartl"  } # hashrocket 定义方式\n\n# Symbol 像没有约束的字符串，特有的数据类型，很容易比较，Hash 键的最佳选择\n# Symbol 中不能使用 \'-\' 连字符\n:name.split(\'\')  # NoMethodError: undefined method `split\' for :name:Symbol`\n\nuser = { :name => "Michael Hartl", :email => "michael@example.com"  }\nuser[:name]  # "Michael Hartl"\n\n# Hash 的两种定义句法，等同\nh2 = { name: "Michael Hartl", email: "michael@example.com"  }\nh1 = { :name => "Michael Hartl", :email => "michael@example.com"  }\nh2[:name]  # "Michael Hartl"\n\n# Hash 值可以是任何对象\n{:user=>{:name=>"Michael Hartl", :email=>"mhartl@example.com"}}\n\n# Hash 有 each 方法，接收两个变量，key & value，以键值对为单位进行遍历\nflash = { success: "It worked!", error: "It failed." }\nflash.each do |key, value|\n  puts "Key #{key.inspect} has value #{value.inspect}"\nend\n\nputs (1..5).to_a.inspect  # 输出一个数组字面量形式 [1, 2, 3, 4, 5]\n\nputs :name, :name.inspect # name    :name\n\np :name  # :name  \n\n')])])]),n("h2",{attrs:{id:"方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[a._v("#")]),a._v(" 方法")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('# 定义方法\ndef 方法名称(参数)\n  方法内容\nend\n\n"foobar.length"  # 6 调用方法\n\n"".empty?  # true\n\nnil.to_s.empty?  #消息串联\n\nnil  # 所有对象中，除了 false 本身，唯一一个布尔值为「假」\n\nif 0  # true\n')])])]),n("h2",{attrs:{id:"流程控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程控制"}},[a._v("#")]),a._v(" 流程控制")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('puts "x is not empty" if !x.empty?  # 条件后置\nputs "The string \'#{string}\' is nonempty." unless string.empty?\n')])])]),n("h2",{attrs:{id:"ruby-类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ruby-类"}},[a._v("#")]),a._v(" Ruby 类")]),a._v(" "),n("ul",[n("li",[a._v("构造器")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('>> s = "foobar" # 使用涮引号的字面构造器\n=> "foobar"\n>> s.class\n=> String\n\ns.class.superclass  # 查找 String 的父类，基类是 BasicObject\n\n# 别名构造器\ns = String.new("foobar")\na = Array.new([1, 3, 2])\nh = Hash.new(0)  # 设置不存在的键返回 0\n')])])]),n("p",[a._v("类上调用的方法，如 new 为类方法(class method)，实例上调用的方法为 实例方法(instance method)")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("# 检查单词反转后是否是本身，类中 self 代表对象本身\nclass Word < String\n  def palindrome?\n    self == self.reverse  # self 代表这个字符串本身\n  end\nend\n")])])]),n("ul",[n("li",[a._v("扩充类")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('# blank < String\n>> "".blank?\n=> true\n>> "      ".empty?\n=> false\n>> "      ".blank?\n=> true\n>> nil.blank?\n=> true\n')])])]),n("ul",[n("li",[a._v("实例变量")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('@开头的实例变量，用于类中不同方法之间传递变量。\nRails 中视图可自动获取\n未定义则为空\n\n# mass assignment 技术，用 Hash 初始化对象\nuser = User.new(name: "Michael Hartl", email: "mhartl@example.com")\n')])])]),n("ul",[n("li",[n("code",[a._v("rand(xxx)")]),a._v(" 产生 xxx位随机数")])])])}),[],!1,null,null,null);e.default=t.exports}}]);