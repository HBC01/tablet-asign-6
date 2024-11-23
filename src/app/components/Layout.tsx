

export default function Layout(){
  return(<>
    <div className="layout">
      <div className="layout-a ">
        <h2>Our Achivements</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
      </div>
      <div className="flex justify-around ">
        <div>
          <h3>+200</h3>
          <p>Courses</p>
        </div>
        <div>
          <h3>50K</h3>
          <p>Members</p>
        </div>
        <div>
          <h3>370K</h3>
          <p>Students</p>
        </div>
        <div>
          <h3>100+</h3>
          <p>Recognition</p>
        </div>
      </div>
      
    </div>
    
  </>)
}