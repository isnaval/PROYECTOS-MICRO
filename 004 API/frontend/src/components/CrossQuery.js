import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

function CrossQuery() {
  const [filters, setFilters] = useState({
    zona: "",
    pais: "",
    id_cliente: "",
    id_producto: "",
  });

  const [results, setResults] = useState([]);

  // Manejar cambios en los filtros
  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  // Ejecutar la consulta cruzada
  const executeQuery = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cross-query",
        filters
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error al realizar la consulta cruzada:", error);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Título principal */}
      <Typography variant="h4" sx={{ p: 2 }}>
        Sistema de Consultas Cruzadas
      </Typography>

      {/* Filtros */}
      <Box
        component="section"
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          marginBottom: 2,
          alignItems: "center",
        }}
      >
        <FormControl fullWidth sx={{ maxWidth: 200 }}>
          <InputLabel>Zona</InputLabel>
          <Select
            name="zona"
            value={filters.zona}
            onChange={handleFilterChange}
          >
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="Europa">Europa</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ maxWidth: 200 }}>
          <InputLabel>País</InputLabel>
          <Select
            name="pais"
            value={filters.pais}
            onChange={handleFilterChange}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="España">España</MenuItem>
            <MenuItem value="Francia">Francia</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="ID Cliente"
          name="id_cliente"
          value={filters.id_cliente}
          onChange={handleFilterChange}
          fullWidth
          sx={{ maxWidth: 200 }}
        />

        <TextField
          label="ID Producto"
          name="id_producto"
          value={filters.id_producto}
          onChange={handleFilterChange}
          fullWidth
          sx={{ maxWidth: 200 }}
        />
      </Box>

      {/* Botón para ejecutar la consulta */}
      <Box sx={{ textAlign: "center", marginBottom: 3 }}>
        <Button variant="contained" color="primary" onClick={executeQuery}>
          Ejecutar Consulta
        </Button>
      </Box>

      {/* Resultados */}
      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Cliente</TableCell>
              <TableCell>Zona</TableCell>
              <TableCell>País</TableCell>
              <TableCell>ID Producto</TableCell>
              <TableCell>Fecha Pedido</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.length > 0 ? (
              results.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.id_cliente}</TableCell>
                  <TableCell>{row.zona}</TableCell>
                  <TableCell>{row.pais}</TableCell>
                  <TableCell>{row.id_producto}</TableCell>
                  <TableCell>{row.fecha_pedido}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No hay resultados para mostrar
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CrossQuery;
