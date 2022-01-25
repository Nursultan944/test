import axios from 'axios';
// using the commit property, we pass contacts to mutation.js
export async function GET_CONTACT ({commit}) {
  const contacts = await axios.get('https://demo.sibers.com/users')
  console.log(contacts.data)
  commit('CONTACT_MUTATION', contacts.data)
}

