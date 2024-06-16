import Data from "../../public/data/MyData.json";
export async function fetchData() {
  try {
    // const response = await fetch("/data/myData.json");
    const response = Data;
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    // const data = await response.json();
    const data = Data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
