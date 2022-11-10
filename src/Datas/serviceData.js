import Lists from '../Components/Lists'

let front = ['HTML', 'CSS', 'JavaScript']
let back = ['LARAVEL (PHP framework)', 'React Js']
let mobile = ['Flutter']

export let datas = [
  {
    header: '',
    cardContent: (
      <>
        <div>
          ArchIntel Tutors are ready to take you through a systematic arranged
          topics on our selected programming languages.
        </div>
        <br /> <span>Front-End Languages</span>
        <br /> <Lists listArray={front} />
        <br /> <span>Back-End Languages</span>
        <br /> <Lists listArray={back} />
        <br /> <span>Mobile Languages</span>
        <br /> <Lists listArray={mobile} />
      </>
    ),
    cardIcon: 'fa fa-graduation-cap',
    iconText: 'Education',
  },
  {
    header: '',
    cardContent:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni vel eaque sequi libero, laboriosam enim voluptatibus obcaecati officia earum voluptatem accusamus alias quam vero sapiente dolore iure consectetur maxime!',
    cardIcon: 'fa fa-empire',
    iconText: 'Development',
  },
  {
    header: '',
    cardContent:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni vel eaque sequi libero, laboriosam enim voluptatibus obcaecati officia earum voluptatem accusamus alias quam vero sapiente dolore iure consectetur maxime!',
    cardIcon: 'fa fa-code',
    iconText: 'Optimization',
  },
]
