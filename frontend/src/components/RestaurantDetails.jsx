import React, { useState } from 'react';
import { Modal, Card, Badge, Button, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { FaClock, FaPhone, FaMapMarkerAlt, FaStar, FaHeart, FaShare, FaUtensils, FaRegClock, FaUserCircle, FaCalendarAlt } from 'react-icons/fa';
import './RestaurantDetails.css';

const RestaurantDetails = ({ restaurant, show, onHide }) => {
    const [key, setKey] = useState('menu');
    if (!restaurant) return null;

    // Données de test pour les avis
    const reviews = [
        {
            id: 1,
            user: "Marie D.",
            rating: 5,
            date: "2024-03-15",
            comment: "Excellent restaurant ! Les plats sont délicieux et le service est impeccable. Je recommande vivement.",
            image: "https://via.placeholder.com/50"
        },
        {
            id: 2,
            user: "Thomas L.",
            rating: 4,
            date: "2024-03-10",
            comment: "Très bon rapport qualité/prix. L'ambiance est agréable et le personnel est sympathique.",
            image: "https://via.placeholder.com/50"
        },
        {
            id: 3,
            user: "Sophie M.",
            rating: 5,
            date: "2024-03-05",
            comment: "Un de mes restaurants préférés ! Les desserts sont exceptionnels.",
            image: "https://via.placeholder.com/50"
        }
    ];

    return (
        <Modal show={show} onHide={onHide} size="lg" className="restaurant-modal">
            <Modal.Header closeButton className="border-0 p-0">
                <div className="w-100">
                    <div className="position-relative">
                        <img 
                            src={restaurant.image || 'https://via.placeholder.com/800x400'} 
                            alt={restaurant.name}
                            className="w-100 rounded-top"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <div className="position-absolute bottom-0 start-0 p-4 text-white w-100" 
                             style={{ 
                                 background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                 backdropFilter: 'blur(2px)'
                             }}>
                            <div className="d-flex justify-content-between align-items-end">
                                <div>
                                    <h2 className="mb-1 fw-bold">{restaurant.name}</h2>
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <FaStar className="text-warning" />
                                        <span className="fw-bold">{restaurant.rating || '4.5'}</span>
                                        <span className="text-light opacity-75">•</span>
                                        <span className="text-light opacity-75">{restaurant.type || 'Restaurant'}</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-2">
                                    <Button variant="light" size="sm" className="rounded-circle p-2">
                                        <FaHeart className="text-danger" />
                                    </Button>
                                    <Button variant="light" size="sm" className="rounded-circle p-2">
                                        <FaShare className="text-primary" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body className="p-0">
                <Tabs
                    id="restaurant-tabs"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="border-0"
                >
                    <Tab eventKey="menu" title="Menu">
                        <div className="p-4">
                            <div className="d-flex flex-column gap-3 mb-4">
                                <Card className="border-0 shadow-sm">
                                    <Card.Body>
                                        <div className="d-flex flex-column gap-3">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="icon-circle bg-danger bg-opacity-10 p-2 rounded-circle">
                                                    <FaMapMarkerAlt className="text-danger" />
                                                </div>
                                                <span className="fw-medium">{restaurant.address}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="icon-circle bg-primary bg-opacity-10 p-2 rounded-circle">
                                                    <FaPhone className="text-primary" />
                                                </div>
                                                <span className="fw-medium">{restaurant.phone}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="icon-circle bg-success bg-opacity-10 p-2 rounded-circle">
                                                    <FaClock className="text-success" />
                                                </div>
                                                <span className="fw-medium">{restaurant.openingHours}</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="menu-section">
                                <div className="d-flex align-items-center gap-2 mb-4">
                                    <FaUtensils className="text-primary" />
                                    <h5 className="mb-0">Menu</h5>
                                </div>
                                {restaurant.menu && restaurant.menu.categories.map((category) => (
                                    <Card key={category.id} className="mb-4 border-0 shadow-sm hover-shadow">
                                        <Card.Header className="bg-light border-0">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="category-icon bg-primary bg-opacity-10 p-2 rounded-circle">
                                                    <FaRegClock className="text-primary" />
                                                </div>
                                                <h6 className="mb-0 fw-bold">{category.name}</h6>
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="p-0">
                                            <div className="list-group list-group-flush">
                                                {category.items.map((item) => (
                                                    <div key={item.id} className="list-group-item border-0 hover-bg-light">
                                                        <div className="d-flex justify-content-between align-items-start">
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1 fw-semibold">{item.name}</h6>
                                                                <p className="text-muted small mb-0">{item.description}</p>
                                                            </div>
                                                            <Badge bg="primary" className="ms-2 fs-6 px-3 py-2">
                                                                {item.price}€
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="reviews" title="Avis">
                        <div className="p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <h5 className="mb-1">Avis clients</h5>
                                    <div className="d-flex align-items-center gap-2">
                                        <FaStar className="text-warning" />
                                        <span className="fw-bold">{restaurant.rating || '4.5'}</span>
                                        <span className="text-muted">({reviews.length} avis)</span>
                                    </div>
                                </div>
                                <Button variant="outline-primary" size="sm">
                                    Laisser un avis
                                </Button>
                            </div>
                            <div className="reviews-container">
                                {reviews.map((review) => (
                                    <Card key={review.id} className="mb-3 border-0 shadow-sm hover-shadow">
                                        <Card.Body>
                                            <div className="d-flex align-items-center gap-3 mb-3">
                                                <img 
                                                    src={review.image} 
                                                    alt={review.user}
                                                    className="rounded-circle"
                                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                />
                                                <div>
                                                    <h6 className="mb-0 fw-bold">{review.user}</h6>
                                                    <div className="d-flex align-items-center gap-1 text-muted small">
                                                        <FaCalendarAlt />
                                                        <span>{new Date(review.date).toLocaleDateString('fr-FR')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-1 mb-2">
                                                {[...Array(5)].map((_, index) => (
                                                    <FaStar 
                                                        key={index}
                                                        className={index < review.rating ? "text-warning" : "text-muted"}
                                                    />
                                                ))}
                                            </div>
                                            <p className="mb-0 text-muted">{review.comment}</p>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer className="border-0 p-4">
                <Button variant="primary" size="lg" className="w-100">
                    Commander
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RestaurantDetails; 