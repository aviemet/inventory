module GuidConverter
  def self.to_oracle_raw16(string, strip_dashes: true, dashify_result: false)
    oracle_format_indices = [3, 2, 1, 0, 5, 4, 7, 6, 8, 9, 10, 11, 12, 13, 14, 15]
    string = string.gsub("-"){ |_match| "" } if strip_dashes
    parts = split_into_chunks(string)
    result = oracle_format_indices.map { |index| parts[index] }.reduce("") { |str, part| "#{str}#{part}" }
    if dashify_result
      result = [result[0..7], result[8..11], result[12..15], result[16..19], result[20..result.size]].join("-")
    end
    result
  end

  def self.split_into_chunks(string, chunk_length = 2)
    chunks = []
    while string.size >= chunk_length
      chunks << string[0, chunk_length]
      string = string[chunk_length, string.size]
    end
    chunks << string unless string.empty?
    chunks
  end

  def self.pack_guid(string)
    [to_oracle_raw16(string)].pack("H*")
  end

  def self.unpack_guid(hex)
    to_oracle_raw16(hex.unpack1("H*"), dashify_result: false)
  end
end
