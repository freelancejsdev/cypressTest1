describe('API Testing',()=>{

   

    it('GET Request',()=>{

        cy.request("https://reqres.in/api/users?page=2").its('body').should('have.property','total');


    })

    it('GET Request',()=>{

        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users?page=2',
            
        }).then((res)=>{
            expect(res.body).have.property('total_pages');
            expect(res.body).have.property('total').to.eql(12);
            expect(res.body.data[0]).to.deep.equal(
                {
                    id:7,
                    email:"michael.lawson@reqres.in",
                    first_name:"Michael",
                    last_name:"Lawson",
                    avatar:"https://reqres.in/img/faces/7-image.jpg"
                })
            
        })
 
     })

    it('POST Request',()=>{
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body: {
                "name": "steve",
                "job": "developer"
            }
        }).then((res)=>{
            expect(res.body).has.property("name","steve");
            expect(res.status).to.eql(201);
        })
    })
})

