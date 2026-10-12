import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Define TypeScript interface for menu items
interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: 'Starters' | 'Mains' | 'Dessert';
  price: number;
}

// Predefined list of courses
const COURSES: ('Starters' | 'Mains' | 'Dessert')[] = ['Starters', 'Mains', 'Dessert'];

export default function App() {
  // State to store menu items in an array
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Form input states
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<'Starters' | 'Mains' | 'Dessert'>('Starters');
  const [price, setPrice] = useState('');

  // Function to handle adding a new menu item
  const handleAddMenuItem = () => {
    if (!dishName.trim() || !description.trim() || !price.trim()) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      Alert.alert('Validation Error', 'Please enter a valid numeric price.');
      return;
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: dishName,
      description,
      course,
      price: parsedPrice,
    };

    // Update array state
    setMenuItems([...menuItems, newItem]);

    // Clear form inputs
    setDishName('');
    setDescription('');
    setCourse('Starters');
    setPrice('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Header */}
      <Text style={styles.headerTitle}>Christoffel Private Chef</Text>
      <Text style={styles.subtitle}>Menu Management Dashboard</Text>

      // Home Screen Display: Total number of menu items
      <View style={styles.counterCard}>
        <Text style={styles.counterTitle}>Total Menu Items Available</Text>
        <Text style={styles.counterValue}>{menuItems.length}</Text>
      </View>

      //Form Section: Add Menu Items on Homepage 
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Add New Dish</Text>

        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          placeholderTextColor="#888"
          value={dishName}
          onChangeText={setDishName}
        />

        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#888"
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Select Course:</Text>
        <View style={styles.courseContainer}>
          {COURSES.map((c) => (
            <TouchableOpacity
              key={c}
              style={[styles.courseButton, course === c && styles.selectedCourseButton]}
              onPress={() => setCourse(c)}
            >
              <Text
                style={[
                  styles.courseButtonText,
                  course === c && styles.selectedCourseButtonText,
                ]}
              >
                {c}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Price (R)"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <Button title="Add to Menu" color="#b8860b" onPress={handleAddMenuItem} />
      </View>

      //Home Screen Display: Prepared Menu List
      <View style={styles.menuListContainer}>
        <Text style={styles.sectionTitle}>Prepared Menu</Text>
        {menuItems.length === 0 ? (
          <Text style={styles.emptyText}>No menu items added yet. Use the form above to add items.</Text>
        ) : (
          menuItems.map((item) => (
            <View key={item.id} style={styles.menuItemCard}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>R {item.price.toFixed(2)}</Text>
              </View>
              <Text style={styles.itemCourse}>Course: {item.course}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#b8860b',
    textAlign: 'center',
    marginBottom: 20,
  },
  counterCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  counterTitle: {
    fontSize: 14,
    color: '#888',
  },
  counterValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#b8860b',
    marginTop: 5,
  },
  formContainer: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#444',
  },
  label: {
    color: '#ccc',
    marginBottom: 8,
    fontSize: 14,
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  courseButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 4,
    backgroundColor: '#2a2a2a',
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444',
  },
  selectedCourseButton: {
    backgroundColor: '#b8860b',
    borderColor: '#ffd700',
  },
  courseButtonText: {
    color: '#ccc',
    fontSize: 12,
    fontWeight: '600',
  },
  selectedCourseButtonText: {
    color: '#ffffff',
  },
  menuListContainer: {
    marginTop: 10,
  },
  emptyText: {
    color: '#777',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 10,
  },
  menuItemCard: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b8860b',
  },
  itemCourse: {
    fontSize: 12,
    color: '#ffd700',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  itemDescription: {
    fontSize: 14,
    color: '#aaa',
  },
});
