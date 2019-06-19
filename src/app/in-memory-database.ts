import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model"
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            {id: 1, name: "Moradia", description: " Pagamentos de Contas da Casa"},
            {id: 2, name: "Saúde", description: " Pagamentos de saúde e Remédios"},
            {id: 3, name: "Lazer", description: " Cinema, parques, praia, etc"},
            {id: 4, name: "Salário", description: " Recebimento de salário"},
            {id: 5, name: "Freelas", description: " Trabalhos como freeLancer"}
        ];

        const entries: Entry[] = [
           { id: 1, name: 'Gás de cozinha', categoryId : categories[0].id, category : categories[0], paid: true, date: '14/10/2018', amount: '70,80', type:"expense", description : 'Qualquer coisa.'} as Entry,
           { id: 2, name: 'Suplemento', categoryId : categories[1].id, category : categories[1], paid: true, date: '15/10/2018', amount: '90,00', type:"expense", description : 'Qualquer coisa.'} as Entry,
           { id: 3, name: 'Cinema', categoryId : categories[3].id, category : categories[3], paid: true, date: '16/10/2018', amount: '25,00', type:"expense", description : 'Qualquer coisa.'} as Entry,
           { id: 4, name: 'Vídeo game', categoryId : categories[3].id, category : categories[3], paid: true, date: '14/10/2018', amount: '300,00', type:"expense", description : 'Qualquer coisa.'} as Entry,
           { id: 5, name: 'Aluguel', categoryId : categories[0].id, category : categories[0], paid: true, date: '20/10/2018', amount: '1000,00', type:"expense", description : 'Qualquer coisa.'} as Entry,
           { id: 6, name: 'Luz', categoryId : categories[0].id, category : categories[0], paid: true, date: '14/10/2018', amount: '70,80', type:"expense", description : 'Qualquer coisa.'} as Entry,
           { id: 7, name: 'Água', categoryId : categories[0].id, category : categories[0], paid: true, date: '14/10/2018', amount: '70,80', type:"expense", description : 'Qualquer coisa.'} as Entry,
           { id: 8, name: 'Parque', categoryId : categories[0].id, category : categories[0], paid: true, date: '14/10/2018', amount: '70,80', type:"expense", description : 'Qualquer coisa.'} as Entry
        ]
        return { categories, entries }    
    }    
}