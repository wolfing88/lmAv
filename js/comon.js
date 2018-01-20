/**
 * 写出文件
 * @param {Object} path
 * @param {Object} fileName
 * @param {Object} content
 *  writerFile('file:///sdcard/测试/','1test.txt', content);
 */
function writerFile(path, fileName, content) {
		plus.io.resolveLocalFileSystemURL(path, function(directoryEntry) { //请求到的目录或文件对象
			directoryEntry.getFile(fileName, {
				create: true
			}, function(fentry) {
				fentry.createWriter(function(writer) {
					writer.onerror = function() {
						console.log("保存文件失败！");
					}
					writer.write(content);
				}, function(e) {
					console.log("创建写文件对象失败：" + e.message);
				});
			}, function(e) {
				console.log("打开保存文件失败：" + e.message);
			});
		}, function(resolveLocalFileSystemURLError) {
			console.log(JSON.stringify(resolveLocalFileSystemURLError))
		});
}