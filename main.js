import "./style.css";

document.querySelector("#app").innerHTML = `
<h4>分页器 a-pagination</h4>

<h5>代码</h5>

<pre>
&lt;a-pagination
  showSizeChanger
  @showSizeChange="onSearch"
  :size="form.size"
  :default-current="1"
  :total="dataListObj.totalRows"
  :pageSize="dataListObj.pageSize"
  @change="onSearch"
  v-model="form.page"
/&gt;
</pre>


<h5>注意</h5>
<ol>
  <li>size: string</li>
  <li>@showSizeChange: (page = 1, size) => void</li>
  <li>onSearch 的函参只用来传递(page, size)</li>
</ol>

<h5>a-table 中的 pagination</h5>

<pre>
&lt;a-table
  :pagination="{
    pageSize: form.size,
    current: form.page,
    defaultPageSize: 1,
    total: form.total,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ['10', '20', '30', '40', '50', '100', '200']
  }"
/&gt;
</pre>
`;
