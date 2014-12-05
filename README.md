# nu.Mobile Viewer (nu.プラグイン #01)

The nu.Mobile Viewer plugin on mobile devices (Android or iPhone) provides the function to check and modify the issue that you created or are interested in.
This plugin works only on mobile devices. If you access by PC browser, your Redmine not affected by this plugin.

![alt tag](http://www.nunet.co.jp/wp-content/uploads/redmine_nu_mobile_viewer.png)

・Redmineを、モバイル（スマホ）で簡単操作できるようにします。

・極力、PCブラウザでの「見た目」を尊重し、局所的な最適化にとどめています。

・モバイル（スマホ）利用時のみ、動作する ※PCブラウザでの利用時には影響をあたえません。

・ネイティブアプリと異なり、Redmineからの通知メールと連動が容易です。
	

# インストール方法(Installation notes)

* `cd /path/to/plugins`
* `git clone https://github.com/NunetInc/redmine_nu_mobile_viewer.git`
* `rake redmine:plugins:migrate RAILS_ENV=production`
* `/etc/rc.d/init.d/httpd restart`

# バージョン(Version)

### 1.1.0 
GitHubにリリースしました

First release on GitHub


===
# 開発会社(Developer)

株式会社ニュー・ネット (http://www.nunet.co.jp) 

Nunet Inc., Osaka, Japan.

<div style="float: left"><img src="http://www.nunet.co.jp/wp-content/uploads/nunetinc_rogo_p.png/>
</div>
![alt tag](http://www.nunet.co.jp/wp-content/uploads/nunetinc_rogo_p.png)
