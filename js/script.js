/* Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg */

const teamMembers = [
    {
        nameSurname: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nameSurname: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        nameSurname: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        nameSurname: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nameSurname: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        nameSurname: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.table(teamMembers);

const teamList = document.getElementById('team-list');

let items = '';
for(let i = 0; i < teamMembers.length; i++){
    const member = teamMembers[i];
    items += `<li class="col-4 p-4"><img src="img/${member.image}" alt=""> <div class="d-flex justify-content-center fst-italic fs-3">${member.nameSurname}</div> <div class="d-flex justify-content-center">${member.role}</div>  </li>`;
} 

teamList.innerHTML = items;