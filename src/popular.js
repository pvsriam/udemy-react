import c1 from './assets/c1.jpg';
import c2 from './assets/c2.jpg';
import c3 from './assets/c3.jpg';
import c4 from './assets/c4.jpg';
function Popular()
{
  return(
    <>
    <div class="popular">
    <h1 class="popular__title">Most Popular</h1>
    <p class="popular__subtitle">Pick the best fit</p>
    <div class="popular__container">
      <div class="course-card">
        <img src={c1} alt="course 1"/>
        <h3>2023 Python Data Visualization Masterclass</h3>
        <p>Col Steele</p>
        <p>4.6⭐⭐⭐⭐</p>
        <p>449 <del>2199</del></p>
      </div>
      <div class="course-card">
        <img src={c2} alt="course 1" />
        <h3>Basic to Advance Programming</h3>
        <p>Col Steele</p>
        <p>4.8⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
      </div>
      <div class="course-card">
        <img src={c3} alt="course 1" />
        <h3>Web Development Bootcamp 2023</h3>
        <p>Col Steele</p>
        <p>3.2⭐⭐⭐⭐</p>
        <p>449 <del>3499</del></p>
      </div>
      <div class="course-card">
        <img src={c4} alt="course 1" />
        <h3>Master UI/UX Designing with Figma</h3>
        <p>Col Steele</p>
        <p>5.0⭐⭐⭐⭐⭐</p>
        <p>449 <del>999</del></p>
      </div>
      <div class="course-card">
        <img src={c2} alt="course 1" />
        <h3>Basic to Advance Programming</h3>
        <p>Col Steele</p>
        <p>4.8⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
      </div>

      <div class="course-card">
        <img src={c1} alt="course 1" />
        <h3>2023 Python Data Visualization Masterclass</h3>
        <p>Col Steele</p>
        <p>4.6⭐⭐⭐⭐</p>
        <p>449 <del>2199</del></p>
      </div>

      <div class="course-card">
        <img src={c2} alt="course 1" />
        <h3>Basic to Advance Programming</h3>
        <p>Col Steele</p>
        <p>4.8⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
      </div> 
      <div class="course-card">
        <img src={c3} alt="course 1" />
        <h3>Web Development Bootcamp 2023</h3>
        <p>Col Steele</p>
        <p>3.2⭐⭐⭐⭐</p>
        <p>449 <del>3499</del></p>
      </div>
    </div>
    </div>
    </>
  )
}
export default Popular