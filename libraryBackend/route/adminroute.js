
import { Router } from "express";

const admin =Router()
const book = new Map()

admin.post("/addbook", (req, res) => {
    try {
        const { BookName,BookAuthorName,Publication,Date,Price } = req.body
        if (book.get(BookName)) {
            res.status(400).json({ msg: "Book already exist" })
        }
        else {
            try {
                book.set(BookName, { BookAuthorName, Publication,Date,Price });
                
                res.status(201).json({ msg: "Book successfully Added" })
            }
            catch {
                res.status(201).json({ msg: "something went wrong" })

            }
        }
    }
    catch {
        res.status(201).json({ msg: "error" })
    }
})


export{admin}