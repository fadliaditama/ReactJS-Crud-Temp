/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

function DataTable({anggaran, refresh}){
    return (
        <tr class="bg-white border-b">
            <td class="px-6 py-4 font-medium text-gray-900">
                {anggaran.nama_anggaran}
            </td>
            <td class="px-6 py-4">
                {anggaran.penanggung_jawab}
            </td>
            <td class="px-6 py-4">
                {anggaran.jumlah_anggaran}
            </td>
            <td class="px-6 py-4 text-right">
                <Link to={"/edit/" + anggaran.id} className="font-medium text-blue-600 px-5" onClick={showEdit}>
                    <i className="">Edit</i>
                </Link>
                <Link className="font-medium text-red-600">Hapus</Link>
            </td>
        </tr>
    )
}

export default DataTable;