import{b as e,d as t,f as n,g as r,l as i,n as a,u as o,y as s}from"./lib-BmfH8Z2i.js";c();async function c(){await r(),i(`groups`),await u(),document.getElementById(`create`).onsubmit=async n=>{n.preventDefault();let r=n.target.elements.group_name.value.trim(),i=t(await s.rpc(`create_group`,{p_name:r}));e(i),location.href=`/group.html?id=`+i},document.getElementById(`join`).onsubmit=async n=>{n.preventDefault();let r=t(await s.rpc(`join_group`,{p_key:l(n.target.elements.key.value)}));e(r),location.href=`/group.html?id=`+r},document.getElementById(`list`).onclick=t=>{let n=t.target.closest(`[data-use]`);n&&(e(n.dataset.use),u())}}function l(e){e=e.trim();try{return new URL(e).searchParams.get(`key`)??e}catch{return e}}async function u(){let e=await o(),t=n(e);document.getElementById(`notice`).classList.toggle(`hidden`,e.length>0),document.getElementById(`list`).innerHTML=e.map(e=>`
    <div class="card mb-2">
      <div class="flex items-center justify-between">
        <a href="/group.html?id=${e.groups.id}" class="font-bold">♡ ${a(e.groups.name)}</a>
        <span class="text-xs">${e.role}</span>
      </div>
      <div class="mt-2 flex items-center justify-between text-sm">
        <a href="/group.html?id=${e.groups.id}" class="underline">Members ›</a>
        ${e.groups.id===t?`<span class="rounded-full bg-primary px-3 py-1 font-bold">Active</span>`:`<button data-use="${e.groups.id}" class="btn px-3 py-1">Use this group</button>`}
      </div>
    </div>`).join(``)}