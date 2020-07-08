   <script type='text/javascript'> var message="Maaf Ya Gabisa Di klik kanan";


function clickIE4(){if (event.button==2){alert(message);return false;}} function clickNS4(e){if (document.layers||document.getElementById&&!document.all){if (e.which==2||e.which==3){alert(message);return false;}}} if (document.layers){document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS4;} else if (document.all&&!document.getElementById){document.onmousedown=clickIE4;} document.oncontextmenu=new Function("alert(message);return false")</script>

  <script type='text/javascript'>
if (typeof document.onselectstart!=&quot;undefined&quot;) {
document.onselectstart=new Function (&quot;return false&quot;);
}
else{
document.onmousedown=new Function (&quot;return false&quot;);
document.onmouseup=new Function (&quot;return true&quot;);
}
</script>
