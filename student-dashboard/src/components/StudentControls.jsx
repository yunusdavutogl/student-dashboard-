function StudentControls({ filter, setFilter, searchTerm, setSearchTerm, sortOrder, setSortOrder }) {
  return (
    <div className="controls">
      <div className="filters">
        {['all', 'pass', 'fail'].map((f) => (
          <button 
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`} 
            onClick={() => setFilter(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <input 
        className="input search" 
        placeholder="Search by name" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button className="btn sort-btn" onClick={() => setSortOrder(sortOrder === 'high-low' ? 'low-high' : 'high-low')}>
        Sort: {sortOrder === 'high-low' ? 'High → Low' : 'Low → High'}
      </button>
    </div>
  );
}

export default StudentControls;