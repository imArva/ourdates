import{S as e,_ as t,c as n,h as r,l as i,n as a,o,s,t as c}from"./lib-BmfH8Z2i.js";l();async function l(){await r(),i(`home`);let l=(await s()).filter(e=>e.scheduled_on>=o(new Date)),u=l[0];document.getElementById(`next`).innerHTML=`
    <p class="text-sm font-bold">Next date ♡</p>
    ${u?`
      <h2 class="serif mt-1 text-2xl">${a(u.title)}</h2>
      <p>${n(u.scheduled_on)}</p>
      <p>${e(u)}</p>
      ${u.location?`<p>${a(u.location)}</p>`:``}
      <span class="mt-3 inline-block rounded-full bg-primary px-3 py-1 text-sm font-bold">${c(u.scheduled_on)}</span>`:`<p class="mt-1">No upcoming dates yet. Plan the first one!</p>`}
    <a href="/form.html" class="btn mt-4 block">+ Add Date</a>`,document.getElementById(`upcoming`).innerHTML=l.slice(0,5).map(t).join(``)||`<p class="text-sm">Nothing planned.</p>`}