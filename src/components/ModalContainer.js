import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import React from 'react';
import {closeModal, addCategory} from '../redux/actions';


class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
    };
  }

  handleChangeCategoryName = (e) => {
    this.setState({categoryName: e.target.value})
  };

  handleCloseModal = () => {
    this.setState({categoryName: ''});
    this.props.closeModal();
  };

  handleAddSubCategory = (e) => {
    e.preventDefault();
    const name = this.state.categoryName;
    const parentId = this.props.parentId;
    this.props.addSubCategory(name, parentId);
    this.props.closeModal();
    this.setState({categoryName: ''});
  };

  render() {
    const {show} = this.props;
    return(
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Type Category Name:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={this.handleAddSubCategory}>
            <FormGroup>
              <FormControl
                autoFocus
                type="text"
                placeholder="Enter text"
                value={this.state.categoryName}
                onChange={this.handleChangeCategoryName}
              />
            </FormGroup>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleCloseModal}>Close</Button>
          <Button type="submit" onClick={this.handleAddSubCategory} bsStyle="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    show: state.modal.show,
    parentId: state.modal.parentId,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(closeModal());
    },
    addSubCategory: (name, parentId) => {
      dispatch(addCategory(name, parentId));
    },
  }
};

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(ModalComponent);

export default ModalContainer;