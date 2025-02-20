# 🍽️ O-Resto - Application de Gestion de Restaurants

O-Resto est une application web permettant aux utilisateurs de :
- 📍 Trouver des **restaurants** sur une carte
- 📖 Consulter **les menus** des restaurants
- ⭐ Laisser des **avis et notes**
- 📸 Ajouter et voir **des photos** des plats
- 🔐 S'inscrire et se connecter

---

## 🚀 **Installation & Démarrage**

### **1️⃣ Cloner le projet**
```bash
git clone https://github.com/YouriLalain/O-Resto.git
cd O-Resto
```

---

### **2️⃣ Configuration**
Avant de démarrer, crée un fichier **`.env`** dans **`backend/`** avec tes variables :
```plaintext
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/App
JWT_SECRET=supersecretkey
```

---

### **3️⃣ Démarrer le Backend**
```bash
cd backend
npm install
npx nodemon server.js
```
📌 **Si `nodemon` n'est pas installé** globalement :
```bash
npm install -g nodemon
```
✅ **Backend accessible sur** `http://localhost:5001`

---

### **4️⃣ Démarrer le Frontend**
Ouvre un **nouveau terminal** et exécute :
```bash
cd frontend
npm install
npm run dev
```
✅ **Frontend accessible sur** `http://localhost:5173`

---

## 🌐 **API Endpoints**
### 📌 **Utilisateurs**
| Méthode | Route | Description |
|---------|-------|------------|
| `POST` | `/api/users/register` | Inscription d'un utilisateur |
| `POST` | `/api/users/login` | Connexion d'un utilisateur |
| `GET` | `/api/users/:id` | Récupérer un utilisateur |

### 📌 **Restaurants**
| Méthode | Route | Description |
|---------|-------|------------|
| `GET` | `/api/restaurants` | Obtenir tous les restaurants |
| `POST` | `/api/restaurants` | Ajouter un restaurant |
| `PUT` | `/api/restaurants/:id` | Modifier un restaurant |
| `DELETE` | `/api/restaurants/:id` | Supprimer un restaurant |

### 📌 **Menus**
| Méthode | Route | Description |
|---------|-------|------------|
| `GET` | `/api/menus/:restaurantId` | Obtenir les menus d'un restaurant |
| `POST` | `/api/menus` | Ajouter un menu |

### 📌 **Avis**
| Méthode | Route | Description |
|---------|-------|------------|
| `GET` | `/api/avis/:restaurantId` | Obtenir les avis d'un restaurant |
| `POST` | `/api/avis` | Ajouter un avis |

### 📌 **Photos**
| Méthode | Route | Description |
|---------|-------|------------|
| `GET` | `/api/photos/:restaurantId` | Obtenir les photos d'un restaurant |
| `POST` | `/api/photos` | Ajouter une photo |

---

## 🛠️ **Technologies utilisées**
- **Frontend** : React, Vite, Axios, Bootstrap
- **Backend** : Node.js, Express, MongoDB, Mongoose
- **Authentification** : JWT, bcryptjs

---

## 🤝 **Contribuer**
Les contributions sont les bienvenues !  
Clone le repo, crée une branche et soumets une **Pull Request**.

---

## 📝 **Licence**
Ce projet est sous licence **MIT**.

---

🚀 **Bon développement avec O-Resto !** 🔥
