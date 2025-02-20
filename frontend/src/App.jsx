import { useEffect, useState } from "react";
import { getUsers, createUser } from "./services/api"; // Vérifie que createUser est bien importé

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
      getUsers()
          .then(data => {
              console.log("📩 Utilisateurs reçus :", data); // Regarde ce que ça affiche dans la console navigateur
              setUsers(data);
          })
          .catch(error => {
              console.error("❌ Erreur lors de la récupération des utilisateurs :", error);
          });
    }, []);
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const newUser = await createUser({ name, email });
          console.log("✅ Utilisateur ajouté :", newUser);
          setUsers(prevUsers => [...prevUsers, newUser]); // Mettre à jour la liste immédiatement
          setName("");
          setEmail("");
      } catch (error) {
          console.error("❌ Erreur lors de l'ajout d'un utilisateur :", error);
      }
    };

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <ul>
              {Array.isArray(users) ? (
                users.map(user => (
                  <li key={user._id}>{user.name} - {user.email}</li>
                ))
              ) : (
                <p>Aucun utilisateur trouvé</p>
              )}
            </ul>
            <h2>Ajouter un utilisateur</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default App;
