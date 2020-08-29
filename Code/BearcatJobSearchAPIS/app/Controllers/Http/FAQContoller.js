"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const FAQ = use("App/Models/FAQ")

class FAQController {

    async getAllFAQs({ request, auth, response, params }) {
        const faq = await FAQ.all();
        console.log(faq)
        return response.status(200).json(faq);

    }
    
   

}
module.exports = FAQController;
