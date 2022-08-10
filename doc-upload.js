const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    //reader.readAsText(file);
    reader.onload = () => resolve(reader.result.toString().replace(/^data:(.*,)?/, ""));
    reader.onerror = (error) => reject(error);
  });

async function uploadFile(file) {
  console.log("start time" + new Date());
  const file = document.querySelector("#fileupload").files[0];
  console.log(file.name, file.type);
  try {
    const fileContent = await toBase64(file);
    console.log(fileContent);
    console.log("end time" + new Date());
    page.ui.get("uploadDoc").execute(file);
  } catch (error) {
    console.error(error);
    return;
  }
}
