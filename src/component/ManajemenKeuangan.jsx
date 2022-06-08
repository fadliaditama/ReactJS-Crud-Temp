/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Component, useState } from "react";
import React from "react";
import API from "../axios/Api";
import DataTable from "./DataTable";

export class ManajemenKeuangan extends Component(){

    state = {
        anggaran: []
    }

    componentDidMount = async () => {
        await API.get("/viewdata.php")
        .then(response => this.setState({
            anggaran: response.data
        }))
    }

    render(){
    
        const renderData = this.state.anggaran.map(anggaran =>{
            return(
                <DataTable anggaran = {anggaran} key={anggaran.id} refresh={this.componentDidMount} />
            )
        })

        const [form, setForm] = useState("");

        function showEdit(){
            setForm("edit");
        }

        function showCreate(){
            setForm("create");
        }

        return(
            <div className="py-10">
            <h1 className="text-center text-2xl py-5 font-bold">Manajemen Keuangan</h1>

            {/* Form Tambah */}
            {form == "create" && (
                <div>
                <h1 className="font-bold">Tambah Data</h1>
                    <form>
                        <div class="grid xl:grid-cols-2 xl:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="namaAnggaran" id="namaAnggaran" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="namaAnggaran" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Anggaran</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="penanggungJawab" id="penanggungJawab" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="penanggungJawab" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Penanggung Jawab</label>
                            </div>
                        </div>
                        <div class="grid xl:grid-cols-2 xl:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="jumlahAnggaran" id="jumlahAnggaran" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="jumlahAnggaran" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jumlah Anggaran</label>
                            </div>
                        </div>
                        <button type="submit" value="Simpan" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Tambah Data</button>
                    </form>
                </div>
            )}
            {/* End Form Tambah */}

            {/* Form Ubah */}
            {form == "edit" && (
                <div>
                    <form>
                        <div class="grid xl:grid-cols-2 xl:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="namaAnggaran" id="namaAnggaran" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="namaAnggaran" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Anggaran</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="penanggungJawab" id="penanggungJawab" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="penanggungJawab" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Penanggung Jawab</label>
                            </div>
                        </div>
                        <div class="grid xl:grid-cols-2 xl:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="jumlahAnggaran" id="jumlahAnggaran" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="jumlahAnggaran" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jumlah Anggaran</label>
                            </div>
                        </div>
                        <button type="submit" value="Ubah" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Ubah Data</button>
                    </form>
                </div>
            )}
            {/* End Form Ubah */}

            {/* Daftar Anggaran */}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <button class="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded" onClick={showCreate}>Tambah Data Anggaran</button>
                    <table class="w-full text-sm text-left text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Nama Anggaran
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Penanggung Jawab
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Jumlah Anggaran
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderData}
                        </tbody>
                    </table>
                </div>
                {/* End Daftar Anggaran */}
            </div>
        )
    }
}


export default ManajemenKeuangan;