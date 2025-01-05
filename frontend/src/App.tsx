import Button from "./components/Button"
import Card from "./components/Card"
import AddIcons from "./icons/AddIcons"
import ShareIcon from "./icons/ShareIcon"

function App() {

  return (
    <div className="bg-gray-50 h-screen w-full">
       <Button varient="primary" text="Add content" startIcon={<AddIcons />}/>
       <Button varient="secondary" text="Share" startIcon={<ShareIcon />}/>
       <div className=" flex px-8 py-16 gap-4">
       <Card title="My first video" link="https://x.com/AbhishekG033/status/1820656490161869164" type="twitter" />
       <Card title="My first tweet" link="https://youtu.be/XX8n9cfLeC4?si=n9J_8EvZ_ZuVgs1K" type="youtube" />
       </div>
    </div>
  )
}
export default App
