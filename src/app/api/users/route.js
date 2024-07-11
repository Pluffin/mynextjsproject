import { NextResponse } from "next/server"

export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?apikey=' + process.env.TOKEN)
    
    const data = await res.json()
    return NextResponse.json({
        data
    })
}


export async function POST(request,) {
    const {name,apellido} = await request.json()
    console.log(name,apellido)
    return NextResponse.json({
        message: "Creating Data"
    })
}

export function PUT() {
    return NextResponse.json({
        message: "Updating Data"
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "Deleting Data"
    })
}