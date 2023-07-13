import React, {useState} from "react";
import { Button } from "@mui/material/";
import { TextField } from "@mui/material/";
import { Dialog } from "@mui/material/";
import { DialogActions } from "@mui/material/";
import { DialogContent } from "@mui/material/";
import { DialogTitle } from "@mui/material/";

function AddItem(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const addItem = () => {
        props.addItem(item);
        setItem({product: '', amount: ''}); //텍스트 필드를 비움
        handleClose();
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (e) => {
        setItem({...item, [e.target.name]: e.target.value})
    }
    const [item, setItem] = React.useState({
        product: '',
        amount: ''
    });

    return(
        <div>
            <Button onClick={handleOpen}>
                Add item
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>new item</DialogTitle>
                <DialogContent>
                    <TextField value={item.product} margin="dense"
                    onChange={handleChange} name="product" 
                    label="Product" fullWidth />
                     <TextField value={item.product} margin="dense"
                    onChange={handleChange} name="amount" 
                    label="Amount" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={AddItem}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default AddItem;