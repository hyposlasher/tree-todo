import shortid from 'shortid'

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const OPEN_ADD_SUBCATEGORY_MODAL = 'OPEN_ADD_SUBCATEGORY_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_EDIT_CATEGORY_MODAL = 'OPEN_EDIT_CATEGORY_MODAL';
export const SAVE_EDIT_CATEGORY = 'SAVE_EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODOS = 'DELETE_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = "EDIT_TODO";
export const CANCEL_EDIT_TODO = 'CANCEL_EDIT_TODO';
export const SAVE_EDIT_TODO = 'SAVE_EDIT_TODO';
export const TOGGLE_COLLAPSE_CATEGORY = 'TOGGLE_COLLAPSE_CATEGORY';
export const MOVE_TODO = 'MOVE_TODO';

export function addCategory(name, parentId) {
  return(dispatch, getState) => {
    dispatch({
      type: ADD_CATEGORY,
      payload: {
        name,
        id: shortid.generate(),
        parentId: parentId || null,
        children: [],
        collapsed: false,
      }
    });
    dispatch(setActiveCategory(parentId));
    const parentCategory = getState().categories.find(category => category.id === parentId);
    if(!parentCategory.collapsed){
      dispatch(toggleCollapseCategory(parentId))
    }
  }
}

export function openAddSubcategoryModal(parentId) {
  return {
    type: OPEN_ADD_SUBCATEGORY_MODAL,
    parentId,
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

export function openEditCategoryModal(id) {
  return {
    type: OPEN_EDIT_CATEGORY_MODAL,
    id,
  }
}

export function saveCategory(id, name) {
  return {
    type: SAVE_EDIT_CATEGORY,
    payload: {
      id,
      name,
    }
  }
}

export function deleteCategories(categories) {
  return {
    type: DELETE_CATEGORY,
    payload: categories,
  }
}

export function setActiveCategory(id) {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: id,
  }
}

export function addTodo(categoryId, text) {
  return {
    type: ADD_TODO,
    payload: {
      categoryId,
      text,
      id: shortid.generate(),
      completed: false,
      description: '',
    },
  }
}

export function deleteTodos(todos) {
  return {
    type: DELETE_TODOS,
    payload: todos,
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id,
  }
}

export function editTodo(id) {
  return {
    type: EDIT_TODO,
    payload: id,
  }
}

export function cancelEditTodo() {
  return {
    type: CANCEL_EDIT_TODO,
  }
}

export function saveEditTodo(todo) {
  return {
    type: SAVE_EDIT_TODO,
    payload: todo,
  }
}

export function toggleCollapseCategory(id) {
  return {
    type: TOGGLE_COLLAPSE_CATEGORY,
    id,
  }
}

export function moveTodo(todoId, categoryId) {
  return {
    type: MOVE_TODO,
    todoId,
    categoryId,
  }
}