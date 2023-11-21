const blob = document.getElementById("blob")
document.body.onpointermove = e => {
  const { clientX, clientY } = e;

  blob.style.left = `${clientX}px`
  blob.style.top = `${clientY}px`
}