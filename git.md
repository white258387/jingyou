git教程<https://www.runoob.com/git/git-remote-repo.html>

git init 将初始化本地git(如果不想使用git管理文件也可以直接删除该文件下的.git文件夹)

.gitignore文件夹文件可以设置git规则，包括哪些文件不被管理

```
git config --global user.name "runoob"
$git config --global user.email test@runoob.com
定义用户名
```
```
ssh-keygen -t rsa -C "youremail@example.com"
配置密钥,用于本地git和远程仓库的数据加密传输（用户名和密钥一一对应）
ssh -T git@github.com（验证用户是否连接上GitHub）
```
```
git push --set-upstream origin master
如果直接新建的一个本地仓库，需要将本地分支和远程分支关联起来，然后才可以使用git push
如果直接克隆的远程仓库，则不需要这一步
```
