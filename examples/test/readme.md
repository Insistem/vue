## 特别注意
1. 只有watcher中的getter才会触发 data中的属性的getter ,从而触发watcher（如果页面使用了this.xxx，但是不用渲染，不会触发watcher更新）