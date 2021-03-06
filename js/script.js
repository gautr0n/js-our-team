/*Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
*/

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role:'Founder & CEO ',
        image:'wayne-barnett-founder-ceo.jpg',
    },
    {
        name:'Angela Caroll',
        role:'Chief Editor',
        image:'angela-caroll-chief-editor.jpg',
    },
    {
        name:'Walter Gordon',
        role:'Office Manager',
        image:'walter-gordon-office-manager.jpg',
    },
    {
        name:'Angela Lopez',
        role:'Social Media Manager',
        image:'angela-lopez-social-media-manager.jpg',
    },
    {
        name:'Scott Estrada',
        role:'Developer',
        image:'scott-estrada-developer.jpg',
    },
    {
        name:'Barbara Ramos',
        role:'Graphic Designer',
        image:'barbara-ramos-graphic-designer.jpg',
    },
];

console.table(teamMembers);

const teamList = document.getElementById('team-list');

let items = '';
for(let i = 0; i < teamMembers.length; i++){
    const member = teamMembers[i];
    items += `<li>${member.name} - ${member.role} - ${member.image}</li>`;
} 

teamList.innerHTML = items;