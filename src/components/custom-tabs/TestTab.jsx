import Tabs from "./tabs"

export default function TestTab(){

    function RandomComponent(){
   return <div>
    random ass content
   </div>
    }


const tabsContent = [
    {
        label:"Tabel",
        content: <div>This is content no 1</div>
    },
    {
        label:"Tabe2",
        content:<div>This is content no 2</div>
    },
    {
        label:"Tabe3",
        content:<RandomComponent />
    }
]
 function handleChange(currentIndex){
    console.log(currentIndex);
 }
return<Tabs tabsContent={tabsContent} OnChange={handleChange}/>

}