function toggleblock(blockId, btnId)
{
   var block = document.getElementById(blockId); // bio
   var btnText = document.getElementById(btnId); // more
   if (block.style.display == 'none') {
    block.style.display = "inline";
    btnText.innerHTML = "(collapse)";
   } else {
    block.style.display = 'none';
    btnText.innerHTML = "(more)";
   }
}

function hideblock(blockId, btnId)
{
   var block = document.getElementById(blockId);
   var btnText = document.getElementById(btnId);
   block.style.display = 'none';
   btnText.innerHTML = "(more)";
}


function copyOnClick() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("BibTeX Copied");
}