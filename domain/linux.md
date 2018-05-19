###linux系统
* 命令
	ls	查看文件夹、文件
	dir	查看文件
	ls -l	查看文件夹、文件详细信息
	ls -a	显示所有隐藏文件·是隐藏文件一个点是当前文件，两个点是上一级文件
	cd	切换目录 空格后面是切换到那个文件 （在linux下文件名是区分大小写的）
	mkdir	创建文件夹空格后面是创建文件夹的名字（不能创建相同名字的文件）
	cp	复制文件（cp  复制文件名 复制到那个文件下aaa/复制后文件名）
	cp -R 	复制文件夹（cp -R 复制文件夹名字 空格 复制文件夹名字）R必须为大写否则报错
	pwd	显示当前路径
	rm	删除命令文件（rm 文件名）不会给任何提示直接删除
	rm -r	删除文件夹(rm -r 文件夹名)
	touch	新建文件（touch index.js）
	vi	进入文件（vi index.js）、i进行编辑、：wq保存退出
	init	(0,1,2,3,4,5,6)
	init 0	关机
	init 1	单用户
	init 2	多用户状态没有网络服务
	init 3	多用户状态有网络服务
	init 4	系统为使用保留给用户
	init 5	图形界面
	init 6	系统重启
	shutdown -h now	立刻关机
	logout	用户注销
	startx 切换到终端
	

* 文件夹权限	who am i~chmod 777 用户名
drwxr-xr-x+
-rw-r--r--@
d		rwx			r-x		r-x	+
-		rw-			r--		r--	@
文件类型	文件所有者权限	文件所在组	其他组对该
l链接		1.r可读 用4表示	对该文件的	文件的权限
d目录		2.w可写 用2表示	权限
-文件		3.x可执行 用1表示




* 不过我们可以通过把sublime的执行文件放到PATH目录下的方式实现用命令打开sublime
找到sublime的安装目录，我的是/opt/sublime_text
建立执行文件到/usr/local/bin的软连接
ln -s /opt/sublime_text/sublime_text /usr/local/bin/subl
这样在终端执行subl <fileName>就可以用sublime打开文件


###windows命令
* cmd命令
	dir	当前文件夹信息
	cd	切换目录（cd 要去的文件夹）
	mkdir	创建文件夹
	copy	拷贝文件（copy 空格 要复制的文件 空格 要复制到那个文件夹下）
	del	删除文件(del 要删除的文件)
	rename	重命名文件（rename 文件名 空格 要改成什么名字）
###Cygwin     windows下学习Linux系统


